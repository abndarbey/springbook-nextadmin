import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useWarehouseTypeCreateMutation, UpdateWarehouseType, Organization, useAutherQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import WTNewHTML from "./WTNewHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function WarehouseTypeNew(props: PageProps) {
    const router = useRouter()
    const [newWarehouseType] = useWarehouseTypeCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Warehouse Types", href: "/warehouses/warehouse-types" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: "",
            details: "",
            orgID: "",

            orgName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgID(obj.id)
        if (obj.id != "" && obj.name) {
            form.values.orgID = obj.id!
            form.values.orgName = obj.name!
        }
    }, [orgID, form])

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

    const handleSubmit = () => {
        var newWarehouseTypeInput: UpdateWarehouseType = {
            name: form.values.name,
            orgID: form.values.orgID,
        }

        newWarehouseType({
            variables: {input: newWarehouseTypeInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Warehouse Type ${res.data.warehouseTypeCreate.name} Created`,
            })
            router.push(`/warehouses/warehouse-types/${res.data.warehouseTypeCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/warehouses/warehouse-types")
    }

    return (
        <Page navTrails={navTrails} >
        <PageHeader title={props.title!} />
            <WTNewHTML
                auther={authData.data?.auther!}
                orgID={orgID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
            />
        </Page>
    )
}
