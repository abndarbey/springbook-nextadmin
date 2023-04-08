import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Organization } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, Textarea, TextInput } from "@mantine/core"

interface IPalletTypeFormValues {
    name: string,
    details: string,
    orgUID: string,
    length: string,
    breadth: string,
    weightCapacity: string,
    weightUnit : string,

    orgName: string,
}

interface IPalletTypeNewHTML {
    auther: Auther
    orgUID: string
    form: UseFormReturnType<IPalletTypeFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
}

export default function PalletTypeNewHTML(props: IPalletTypeNewHTML) {
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
                {...props.form.getInputProps("details")}
            />
            <SimpleGrid cols={2}>
                <TextInput
                    label="Length"
                    placeholder="Length"
                    type="number"
                    mb="md"
                    name="length"
                    {...props.form.getInputProps("length")}
                />
                <TextInput
                    label="Breadth"
                    placeholder="Breadth"
                    type="number"
                    mb="md"
                    name="breadth"
                    {...props.form.getInputProps("breadth")}
                />
            </SimpleGrid>
            <SimpleGrid cols={2}>
                <TextInput
                    label="Weight Capacity"
                    placeholder="Weight Capacity"
                    type="number"
                    mb="md"
                    name="weightCapacity"
                    {...props.form.getInputProps("weightCapacity")}
                />
                <TextInput
                    label="Weight Unit"
                    placeholder="Weight Unit"
                    mb="md"
                    name="weightUnit"
                    {...props.form.getInputProps("weightUnit")}
                />
            </SimpleGrid>
        </FormCard>
    )
}