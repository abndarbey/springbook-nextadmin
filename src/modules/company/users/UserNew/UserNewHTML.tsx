import { Fragment, useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, Department, Organization, Role } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, TextInput } from "@mantine/core"
import DepartmentSelectModal from "common/select-table/DepartmentSelectModal"
import RoleSelectModal from "common/select-table/RoleSelectModal"

interface IUserFormValues {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    orgID: string,
    roleID: string,
    
    departmentID: string,
    orgName: string,
    departmentName: string,
    roleName: string,
}

interface IUserNewHTML {
    title: string
    auther: Auther
    orgID: string
    form: UseFormReturnType<IUserFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleDepartmentSelect: (item: Department) => void
    handleRoleSelect: (item: Role) => void
}

export default function UserNewHTML(props: IUserNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [deptModalOpened, setDeptModalOpened] = useState(false)
    const [roleModalOpened, setRoleModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Users", href: "/company/users" },
        { title: "New", href: "#" },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title="New User" />
            <FormCard
                submitButtonName="Create"
                handleSubmit={props.form.onSubmit(props.handleSubmit)}
                handleCancel={props.handleCancel}
            >
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        mb="md"
                        label="First Name"
                        placeholder="First name"
                        name="firstName"
                        {...props.form.getInputProps('firstName')}
                    />
                    <TextInput
                        mb="md"
                        label="Last Name"
                        placeholder="Last name"
                        name="lastName"
                        {...props.form.getInputProps('lastName')}
                    />
                </SimpleGrid>
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="Email"
                        placeholder="Email"
                        mb="md"
                        name="email"
                        {...props.form.getInputProps('email')}
                    />
                    <TextInput
                        label="Phone"
                        placeholder="Phone"
                        mb="md"
                        name="phone"
                        {...props.form.getInputProps('phone')}
                    />
                </SimpleGrid>
                {/* Select Organization */}
                {props.auther.isAdmin && props.orgID == "" &&
                    <Fragment>
                        <OrgSelectModal
                            opened={orgModalOpened}
                            setOpened={setOrgModalOpened}
                            handleSelect={props.handleOrgSelect}
                        />
                        <TextInput
                            label="Organization"
                            mb="md"
                            placeholder="Select Organization"
                            name="organization"
                            onClick={() => setOrgModalOpened(true)}
                            {...props.form.getInputProps("orgName")}
                        />
                    </Fragment>
                }
                {props.form.values.orgID != "" &&
                    <DepartmentSelectModal
                        opened={deptModalOpened}
                        setOpened={setDeptModalOpened}
                        handleSelect={props.handleDepartmentSelect}
                        organizationID={props.form.values.orgID}
                    />
                }
                {props.form.values.orgID != "" &&
                    <DepartmentSelectModal
                        opened={deptModalOpened}
                        setOpened={setDeptModalOpened}
                        handleSelect={props.handleDepartmentSelect}
                        organizationID={props.form.values.orgID}
                    />
                }
                <TextInput
                    label="Department"
                    placeholder="Select Department"
                    mb="md"
                    disabled={props.form.values.orgID != "" ? false : true}
                    onClick={() => setDeptModalOpened(true)}
                    {...props.form.getInputProps('departmentName')}
                />

                {props.form.values.departmentID != "" &&
                    <RoleSelectModal
                        opened={roleModalOpened}
                        setOpened={setRoleModalOpened}
                        handleSelect={props.handleRoleSelect}
                        departmentID={props.form.values.departmentID}
                    />
                }
                <TextInput
                    label="Role"
                    placeholder="Select Role"
                    mb="md"
                    disabled={props.form.values.departmentID != "" ? false : true}
                    onClick={() => setRoleModalOpened(true)}
                    {...props.form.getInputProps('roleName')}
                />
            </FormCard>
        </Page>
    )
}