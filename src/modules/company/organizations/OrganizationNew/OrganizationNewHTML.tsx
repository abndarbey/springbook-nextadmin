import Page from "components/Page"
import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import { INavTrailProps } from "components/NavTrails"
import { Auther } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, TextInput } from "@mantine/core"

interface IOrganizationFormValues {
    orgName: string
    website: string
    sector: string
    firstName: string
    lastName: string
    email: string
    phone: string
}

interface IOrganizationNewHTML {
    title: string
    auther: Auther
    orgUID: string
    form: UseFormReturnType<IOrganizationFormValues>
    handleSubmit: () => void
    handleCancel: () => void
}

export default function OrganizationNewHTML(props: IOrganizationNewHTML) {
    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Organizations", href: "/company/organizations" },
        { title: "New", href: "#" },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <FormCard
                submitButtonName="Create"
                handleSubmit={props.form.onSubmit(props.handleSubmit)}
                handleCancel={props.handleCancel}
            >
                <TextInput
                    label="Organization Name"
                    mb="md"
                    placeholder="Organization Name"
                    {...props.form.getInputProps("orgName")}
                />
                <SimpleGrid cols={2}>
                    <TextInput
                        label="Website"
                        mb="md"
                        placeholder="Website"
                        {...props.form.getInputProps("website")}
                    />
                    <TextInput
                        label="Sector"
                        mb="md"
                        placeholder="Sector"
                        {...props.form.getInputProps("sector")}
                    />
                </SimpleGrid>
                <SimpleGrid cols={2}>
                    <TextInput
                        label="First Name"
                        mb="md"
                        placeholder="First Name"
                        {...props.form.getInputProps("firstName")}
                    />
                    <TextInput
                        label="Last Name"
                        mb="md"
                        placeholder="Last Name"
                        {...props.form.getInputProps("lastName")}
                    />
                </SimpleGrid>
                <SimpleGrid cols={2}>
                    <TextInput
                        label="Email"
                        mb="md"
                        placeholder="Email"
                        {...props.form.getInputProps("email")}
                    />
                    <TextInput
                        label="Phone"
                        mb="md"
                        placeholder="Phone"
                        {...props.form.getInputProps("phone")}
                    />
                </SimpleGrid>
            </FormCard>
        </Page>
    )
}