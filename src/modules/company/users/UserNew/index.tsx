import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useUserCreateMutation, UpdateUser, Organization, useAutherQuery, Department, Role } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import UserNewHTML from "./UserNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function UserNew(props: PageProps) {
    const router = useRouter()
    const [newUser] = useUserCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            orgUID: "",
            roleID: "",
            
            departmentID: "",
            orgName: "",
            departmentName: "",
            roleName: "",
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

    const handleDepartmentSelect = (item: Department | undefined) => {
        if (item) {
            form.values.departmentID = item?.id!
            form.values.departmentName = item?.name!
        }
    }

    const handleRoleSelect = (item: Role | undefined) => {
        if (item) {
            form.values.roleID = item?.id!
            form.values.roleName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newUserInput: UpdateUser = {
            firstName: form.values.firstName,
            lastName: form.values.lastName,
            email: form.values.email,
            phone: form.values.phone,
            orgUID: form.values.orgUID,
            roleID: form.values.roleID,
        }

        newUser({
            variables: {input: newUserInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `User ${res.data.userCreate.firstName} Created`,
            })
            router.push("/company/users")
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/company/users")
    }

    return (
        <UserNewHTML
            title={props.title!}
            auther={authData.data?.auther!}
            orgUID={orgUID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleDepartmentSelect={handleDepartmentSelect}
            handleRoleSelect={handleRoleSelect}
        />
    )
}
