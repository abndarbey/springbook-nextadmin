import { Fragment, useState } from "react"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, Textarea, TextInput } from "@mantine/core"

interface ISkuCatFormValues {
    orgID: string,
    name: string,
    hsnCode: string,
    brand: string,
    description: string,
    ingredients: string,
    weight: string,
    weightUnit: string,

    orgName: string,
}

interface ISkuCatNewHTML {
    auther: Auther
    orgID: string
    form: UseFormReturnType<ISkuCatFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
}

export default function SkuCatNewHTML(props: ISkuCatNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    return (
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
            <TextInput
                label="Name"
                placeholder="Name"
                mb="md"
                name="name"
                {...props.form.getInputProps("name")}
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                    label="HSN Code"
                    placeholder="HSN Code"
                    mb="md"
                    name="hsnCode"
                    {...props.form.getInputProps("hsnCode")}
                />
                <TextInput
                    label="Brand"
                    placeholder="Brand"
                    mb="md"
                    name="brand"
                    {...props.form.getInputProps("brand")}
                />
            </SimpleGrid>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                    label="Weight"
                    placeholder="Weight"
                    mb="md"
                    type="number"
                    name="weight"
                    {...props.form.getInputProps("weight")}
                />
                <TextInput
                    label="Weight Unit"
                    placeholder="Weight Unit"
                    mb="md"
                    name="weightUnit"
                    {...props.form.getInputProps("weightUnit")}
                />
            </SimpleGrid>
            <Textarea
                label="Description"
                placeholder="Description"
                mb="md"
                name="description"
                {...props.form.getInputProps("description")}
            />
            <Textarea
                label="Ingredeints"
                placeholder="Ingredeints"
                mb="md"
                name="ingredeints"
                {...props.form.getInputProps("ingredeints")}
            />
        </FormCard>
    )
}