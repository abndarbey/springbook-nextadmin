import { Fragment, useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import SkuCatalogueSelectModal from "common/select-table/SkuCatalogueSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, SkuCatalogue, Organization } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { TextInput } from "@mantine/core"

interface ISkuFormValues {
    skuID: string,
    orgID: string,

    orgName: string,
    skuName: string,
}

interface ISkuNewHTML {
    title: string
    auther: Auther
    orgID: string
    form: UseFormReturnType<ISkuFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleSkuCatalogueSelect: (item: SkuCatalogue) => void
}

export default function SkuNewHTML(props: ISkuNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuCatModalOpened, setSkuCatModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Skus", href: "/inventory/skus" },
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
                    <SkuCatalogueSelectModal
                        opened={skuCatModalOpened}
                        setOpened={setSkuCatModalOpened}
                        handleSelect={props.handleSkuCatalogueSelect}
                        organizationID={props.form.values.orgID}
                    />
                }
                <TextInput
                    label="Sku Catalogue"
                    mb="md"
                    placeholder="Select Sku Catalogue"
                    disabled={props.form.values.orgID != "" ? false : true}
                    onClick={() => setSkuCatModalOpened(true)}
                    {...props.form.getInputProps("skuName")}
                />
            </FormCard>
        </Page>
    )
}