import { Fragment, useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, Department, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { TextInput } from "@mantine/core"
import DepartmentSelectModal from "common/select-table/DepartmentSelectModal"

interface IRoleFormValues {
    name: string,
    isManagement: boolean,
    departmentID: string,
    orgID: string,

    orgName: string,
    departmentName: string,
}

interface IRoleNewHTML {
    title: string
    auther: Auther
    orgID: string
    form: UseFormReturnType<IRoleFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleDepartmentSelect: (item: Department) => void
}

export default function RoleNewHTML(props: IRoleNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [deptModalOpened, setDeptModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Roles", href: "/company/roles" },
        { title: "New", href: "#" },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title="New Role" />
            <FormCard
                submitButtonName="Create"
                handleSubmit={props.form.onSubmit(props.handleSubmit)}
                handleCancel={props.handleCancel}
            >
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
                <TextInput
                    label="Department"
                    placeholder="Select Department"
                    mt="md"
                    disabled={props.form.values.orgID != "" ? false : true}
                    onClick={() => setDeptModalOpened(true)}
                    {...props.form.getInputProps("departmentName")}
                />
                <TextInput
                    label="Name"
                    placeholder="Name"
                    mt="md"
                    name="name"
                    {...props.form.getInputProps("name")}
                />
            </FormCard>
        </Page>
    )
}