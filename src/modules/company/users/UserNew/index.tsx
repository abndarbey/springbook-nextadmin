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
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function UserNew(props: PageProps) {
    const router = useRouter()
    const [newUser] = useUserCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            orgID: "",
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
            orgID: form.values.orgID,
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
            orgID={orgID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleDepartmentSelect={handleDepartmentSelect}
            handleRoleSelect={handleRoleSelect}
        />
    )
}
