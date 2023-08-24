import { Fragment, useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import SkuCatalogueSelectModal from "common/select-table/SkuCatalogueSelectModal"
import { Auther, SkuCatalogue, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { TextInput } from "@mantine/core"

interface SkuFormValues {
    orgID: string,
    isRawMaterial: boolean,

    orgName: string,
}

interface SkuEditHTML {
    title: string
    auther: Auther
    orgID: string
    form: UseFormReturnType<SkuFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
}

export default function SkuEditHTML(props: SkuEditHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    return (
        <>
            <PageHeader title={props.title!} />
            <FormCard
                submitButtonName="Update"
                handleSubmit={props.form.onSubmit(props.handleSubmit)}
                handleCancel={props.handleCancel}
            >
                {/* Select Contractor */}
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
            </FormCard>
        </>
    )
}