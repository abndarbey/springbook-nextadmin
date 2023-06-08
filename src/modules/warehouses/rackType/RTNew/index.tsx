import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useRackTypeCreateMutation, UpdateRackType, Organization, useAutherQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import RTNewHTML from "./RTNewHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function RackTypeNew(props: PageProps) {
    const router = useRouter()
    const [newRackType] = useRackTypeCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Rack Types", href: "/warehouses/rack-types" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: "",
            storageType: "",
            details: "",
            orgUID: "",

            orgName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgUID(obj.uid)
        if (obj.uid != "" && obj.name) {
            form.values.orgUID = obj.uid!
            form.values.orgName = obj.name!
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

    const handleSubmit = () => {
        var newRackTypeInput: UpdateRackType = {
            name: form.values.name,
            storageType: form.values.storageType,
            orgUID: form.values.orgUID,
        }

        newRackType({
            variables: {input: newRackTypeInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Rack Type ${res.data.rackTypeCreate.name} Created`,
            })
            router.push(`/warehouses/rack-types/${res.data.rackTypeCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/warehouses/rack-types")
    }

    return (
        <Page navTrails={navTrails} >
        <PageHeader title={props.title!} />
            <RTNewHTML
                auther={authData.data?.auther!}
                orgUID={orgUID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
            />
        </Page>
    )
}
