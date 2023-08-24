import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useRackCreateMutation, UpdateRack, Organization, useAutherQuery, Warehouse, RackType } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import RackEditHTML from "./RackEditHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function RackEdit(props: PageProps) {
    const router = useRouter()
    const [newRack] = useRackCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")
    const [whID, setWhID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Racks", href: "/warehouses/racks" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgID: "",
            typeID: "",
            warehouseID: "",
            rows: 0,
            columns: 0,
        
            rtCode: "",
            whName: "",
            orgName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const org = getObjectFromLocalStorage("org")
        setOrgID(org.id)
        if (org.id != "" && org.name) {
            form.values.orgID = org.id!
            form.values.orgName = org.name!
        }
        const wh = getObjectFromLocalStorage("org")
        setOrgID(wh.id)
        if (wh.id != "" && wh.name) {
            form.values.orgID = wh.id!
            form.values.orgName = wh.name!
        }
    }, [orgID, whID, form])

    // load auther
    const authData = useAutherQuery()
    if (authData.loading) {
        return (
            <PageLoader />
        )
    }
    if (authData.error) {
        showNotification({
            disallowClose: false,
            color: "red",
            message: authData.error.message,
        })
        return <PageLoader isError={true} />
    }
    if (authData.data && !autherLoaded) {
        if (!authData.data.auther.isAdmin) {
            form.setValues({ orgID: authData.data.auther.orgID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgID = item.id!
            form.values.orgName = item.name!
        }
    }
    const handleWarehouseSelect = (item: Warehouse) => {
        if (item) {
            form.values.warehouseID = item.id!
            form.values.whName = item.name!
        }
    }
    const handleRackTypeSelect = (item: RackType) => {
        if (item) {
            form.values.typeID = item.id!
            form.values.rtCode = item.code!
        }
    }

    const handleSubmit = () => {
        var newRackInput: UpdateRack = {
            orgID: form.values.orgID,
            typeID: form.values.typeID,
            warehouseID: form.values.warehouseID,
            rows: form.values.rows,
            columns: form.values.columns
        }

        newRack({
            variables: {input: newRackInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Rack ${res.data.rackCreate.code} Created`,
            })
            router.push(`/warehouses/racks/${res.data.rackCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/warehouses/racks")
    }

    return (
        <Page navTrails={navTrails} >
            <PageHeader title={props.title!} />
            <RackEditHTML
                auther={authData.data?.auther!}
                orgID={orgID}
                whID={whID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
                handleWarehouseSelect={handleWarehouseSelect}
                handleRackTypeSelect={handleRackTypeSelect}
            />
        </Page>
    )
}
