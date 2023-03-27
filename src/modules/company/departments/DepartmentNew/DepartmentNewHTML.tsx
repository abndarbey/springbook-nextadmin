import { Fragment, useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import SkuCatalogueSelectModal from "common/select-table/SkuCatalogueSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, SkuCatalogue, Organization } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { TextInput } from "@mantine/core"

interface ISkuFormValues {
    name: string,
    orgUID: string,

    orgName: string,
}

interface ISkuNewHTML {
    title: string
    auther: Auther
    orgUID: string
    form: UseFormReturnType<ISkuFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
}

export default function SkuNewHTML(props: ISkuNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Departments", href: "/company/departments" },
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
                {/* Select Contractor */}
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
                    placeholder="Department Name"
                    {...props.form.getInputProps("name")}
                />
            </FormCard>
        </Page>
    )
}