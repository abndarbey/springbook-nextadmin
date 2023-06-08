import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { Textarea, TextInput } from "@mantine/core"

interface IRackTypeFormValues {
    name: string,
    details: string,
    storageType: string,
    orgUID: string,

    orgName: string,
}

interface IRackTypeNewHTML {
    auther: Auther
    orgUID: string
    form: UseFormReturnType<IRackTypeFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
}

export default function RackTypeNewHTML(props: IRackTypeNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    return (
        <FormCard
            submitButtonName="Create"
            handleSubmit={props.form.onSubmit(props.handleSubmit)}
            handleCancel={props.handleCancel}
        >
            {/* Select Organization */}
            {props.auther.isAdmin && props.orgUID == "" &&
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
            <TextInput
                label="Name"
                mb="md"
                placeholder="Name"
                {...props.form.getInputProps("name")}
            />
            <Textarea
                label="Description"
                placeholder="Description"
                mb="md"
                name="details"
                {...props.form.getInputProps('details')}
            />
            <TextInput
                label="Storage Type"
                mb="md"
                placeholder="Storage Type"
                {...props.form.getInputProps("storageType")}
            />
        </FormCard>
    )
}