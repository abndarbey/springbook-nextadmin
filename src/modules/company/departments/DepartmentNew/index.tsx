import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useDepartmentCreateMutation, UpdateDepartment, Organization, useAutherQuery } from "@lib/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import DepartmentNewHTML from "./DepartmentNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function DepartmentNew(props: PageProps) {
    const router = useRouter()
    const [newDepartment] = useDepartmentCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: "",
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
        var newDepartmentInput: UpdateDepartment = {
            name: form.values.name,
            orgUID: form.values.orgUID,
        }

        newDepartment({
            variables: {input: newDepartmentInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Department ${res.data.departmentCreate.name} Created`,
            })
            router.push("/company/departments")
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/company/departments")
    }

    return (
        <DepartmentNewHTML
            title={props.title!}
            auther={authData.data?.auther!}
            orgUID={orgUID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
        />
    )
}
