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
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function RackTypeNew(props: PageProps) {
    const router = useRouter()
    const [newRackType] = useRackTypeCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

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
        var newRackTypeInput: UpdateRackType = {
            name: form.values.name,
            storageType: form.values.storageType,
            orgID: form.values.orgID,
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
                orgID={orgID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
            />
        </Page>
    )
}
