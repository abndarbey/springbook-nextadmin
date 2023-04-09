import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { usePalletCreateMutation, UpdatePallet, Organization, useAutherQuery, Warehouse, PalletType } from "@lib/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import PalletNewHTML from "./PalletNewHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function PalletNew(props: PageProps) {
    const router = useRouter()
    const [newPallet] = usePalletCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")
    const [whUID, setWhUID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Pallets", href: "/warehouses/pallets" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: "",
            typeID: "",
            warehouseUID: "",
            quantity: 0,
        
            rtCode: "",
            whName: "",
            orgName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const org = getObjectFromLocalStorage("org")
        setOrgUID(org.uid)
        if (org.uid != "" && org.name) {
            form.values.orgUID = org.uid!
            form.values.orgName = org.name!
        }
        const wh = getObjectFromLocalStorage("org")
        setOrgUID(wh.uid)
        if (wh.uid != "" && wh.name) {
            form.values.orgUID = wh.uid!
            form.values.orgName = wh.name!
        }
    }, [orgUID, whUID, form])

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
            form.setValues({ orgUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }
    const handleWarehouseSelect = (item: Warehouse) => {
        if (item) {
            form.values.warehouseUID = item.uid!
            form.values.whName = item.name!
        }
    }
    const handlePalletTypeSelect = (item: PalletType) => {
        if (item) {
            form.values.typeID = item.id!
            form.values.rtCode = item.code!
        }
    }

    const handleSubmit = () => {
        var newPalletInput: UpdatePallet = {
            orgUID: form.values.orgUID,
            typeID: form.values.typeID,
            warehouseUID: form.values.warehouseUID,
            quantity: form.values.quantity,
        }

        newPallet({
            variables: {input: newPalletInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Pallets Created`,
            })
            router.push(`/warehouses/pallets`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/warehouses/pallets")
    }

    return (
        <Page navTrails={navTrails} >
            <PageHeader title={props.title!} />
            <PalletNewHTML
                auther={authData.data?.auther!}
                orgUID={orgUID}
                whUID={whUID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
                handleWarehouseSelect={handleWarehouseSelect}
                handlePalletTypeSelect={handlePalletTypeSelect}
            />
        </Page>
    )
}
