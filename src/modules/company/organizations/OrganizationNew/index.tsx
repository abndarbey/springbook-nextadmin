import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useOrganizationRegisterMutation, RegisterOrganization, Organization, useAutherQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import OrganizationNewHTML from "./OrganizationNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function OrganizationNew(props: PageProps) {
    const router = useRouter()
    const [newOrganization] = useOrganizationRegisterMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgName: "",
            website: "",
            sector: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
    })

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
            <PageLoader />
        }
        setAutherLoaded(true)
    }

    const handleSubmit = () => {
        var input: RegisterOrganization = {
            orgName: form.values.orgName,
            website: form.values.website,
            sector: form.values.sector,
            firstName: form.values.firstName,
            lastName: form.values.lastName,
            email: form.values.email,
            phone: form.values.phone,
        }

        newOrganization({
            variables: {input}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Organization ${res.data.organizationRegister.name} Created`,
            })
            router.push("/company/organizations")
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/company/organizations")
    }

    return (
        <OrganizationNewHTML
            title={props.title!}
            auther={authData.data?.auther!}
            orgID={orgID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
        />
    )
}
