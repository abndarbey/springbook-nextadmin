import { Fragment, useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { TextInput } from "@mantine/core"

interface IContactFormValues {
    companyUID: string,
    orgUID: string,

    companyName: string,
    orgName: string,
}

interface IContactNewHTML {
    title: string
    auther: Auther
    orgUID: string
    form: UseFormReturnType<IContactFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleContactSelect: (item: Organization) => void
}

export default function ContactNewHTML(props: IContactNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [contactModalOpened, setContactModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Contacts", href: "/company/contacts" },
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
                {/* Select Contact Organization */}
                {props.form.values.orgUID != "" &&
                    <Fragment>
                        <OrgSelectModal
                            opened={contactModalOpened}
                            setOpened={setContactModalOpened}
                            handleSelect={props.handleContactSelect}
                        />
                        <TextInput
                            label="Contact Organization"
                            mb="md"
                            placeholder="Select Contact Organization"
                            name="organization"
                            onClick={() => setContactModalOpened(true)}
                            {...props.form.getInputProps("companyName")}
                        />
                    </Fragment>
                }
            </FormCard>
        </Page>
    )
}