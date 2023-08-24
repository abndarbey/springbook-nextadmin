import { Fragment, useState } from "react"
import { TextInput } from "@mantine/core"
import BatchCatalogueSelectModal from "common/select-table/BatchCatalogueSelectModal"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import { Auther, BatchCatalogue, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { INavTrailProps } from "components/NavTrails"

interface IBatchFormValues {
    batchID: string,
    orgID: string,

    orgName: string,
    batchNumber: string,
}

interface IBatchNewHTML {
    title: string
    auther: Auther
    orgID: string
    form: UseFormReturnType<IBatchFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleBatchCatalogueSelect: (item: BatchCatalogue) => void
}

export default function BatchNewHTML(props: IBatchNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [batchCatModalOpened, setBatchCatModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Batches", href: "/inventory/batches" },
        { title: "New", href: "#" },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title} />
            <FormCard
                submitButtonName="Create"
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

                {props.form.values.orgID != "" &&
                    <BatchCatalogueSelectModal
                        opened={batchCatModalOpened}
                        setOpened={setBatchCatModalOpened}
                        handleSelect={props.handleBatchCatalogueSelect}
                        organizationID={props.form.values.orgID}
                    />
                }
                <TextInput
                    label="Batch Catalogue"
                    mb="md"
                    placeholder="Select Batch Catalogue"
                    disabled={props.form.values.orgID != "" ? false : true}
                    onClick={() => setBatchCatModalOpened(true)}
                    {...props.form.getInputProps("batchNumber")}
                />
            </FormCard>
        </Page>
    )
}
