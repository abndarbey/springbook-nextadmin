import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useWarehouseCreateMutation, UpdateWarehouse, Organization, useAutherQuery, Warehouse, WarehouseType } from "@lib/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import WarehouseNewHTML from "./WarehouseNewHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function WarehouseNew(props: PageProps) {
    const router = useRouter()
    const [newWarehouse] = useWarehouseCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")
    const [whUID, setWhUID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Warehouses", href: "/warehouses/warehouses" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: "",
            typeID: "",
            name: "",
            details: "",
            geoLocation: {
                lat: 0,
                lon: 0,
            },
            locality: "",
            city: "",
            pincode: "",
        
            wtName: "",
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
    }, [orgUID, form])

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
    const handleWarehouseTypeSelect = (item: WarehouseType) => {
        if (item) {
            form.values.typeID = item.id!
            form.values.wtName = item.name!
        }
    }

    const handleSubmit = () => {
        var newWarehouseInput: UpdateWarehouse = {
            orgUID: form.values.orgUID,
            typeID: form.values.typeID,
            name: form.values.name,
            details: form.values.details,
            city: form.values.city,
            locality: form.values.locality,
            pincode: form.values.pincode,
            geoLocation: form.values.geoLocation,
        }

        newWarehouse({
            variables: {input: newWarehouseInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Warehouse ${res.data.warehouseCreate.code} Created`,
            })
            router.push(`/warehouses/warehouses/${res.data.warehouseCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/warehouses/warehouses")
    }

    return (
        <Page navTrails={navTrails} >
            <PageHeader title={props.title!} />
            <WarehouseNewHTML
                auther={authData.data?.auther!}
                orgUID={orgUID}
                whUID={whUID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
                handleWarehouseTypeSelect={handleWarehouseTypeSelect}
            />
        </Page>
    )
}
