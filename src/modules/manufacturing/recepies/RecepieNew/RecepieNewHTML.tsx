import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Contact, Organization, Sku, SkuCatalogue, Warehouse } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SegmentedControl, SimpleGrid, Text, TextInput, Textarea } from "@mantine/core"
import ContactSelectModal from "common/select-table/ContactSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { RecepieFormValues } from "./RecepieNewTypes"
import RecepieItemsAddHTML from "./RecepieItemsAddHTML"
import SkuSelectModal from "common/select-table/SkuSelectModal"

interface IRecepieNewHTMLProps {
    auther: Auther
    orgID: string
    form: UseFormReturnType<RecepieFormValues>
    handleSubmit: () => void
    handleCancel: () => void
}

export default function RecepieNewHTML(props: IRecepieNewHTMLProps) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuModalOpened, setSkuModalOpened] = useState(false)

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            props.form.values.orgID = item.id!
            props.form.values.orgName = item.name!
        }
    }
    const handleSkuSelect = (item: Sku) => {
        if (item) {
            props.form.values.skuID = item.id!
            props.form.values.skuName = item.name!
        }
    }

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
                        handleSelect={handleOrgSelect}
                    />
                    <TextInput
                        label="Org"
                        mb="md"
                        placeholder="Select Org"
                        name="org"
                        onClick={() => setOrgModalOpened(true)}
                        {...props.form.getInputProps("orgName")}
                    />
                </Fragment>
            }
            {props.form.values.orgID != "" &&
                <SkuSelectModal
                    opened={skuModalOpened}
                    setOpened={setSkuModalOpened}
                    handleSelect={handleSkuSelect}
                    organizationID={props.form.values.orgID}
                />
            }
            <TextInput
                label="Sku"
                placeholder="Select Sku"
                name="sku"
                mb="md"
                disabled={props.form.values.orgID != "" ? false : true}
                onClick={() => setSkuModalOpened(true)}
                {...props.form.getInputProps('skuName')}
            />
            <TextInput
                label="Currency"
                mb="md"
                placeholder="Currency"
                {...props.form.getInputProps("details.currency")}
            />
            <SimpleGrid cols={2}>
                <TextInput
                    label="Shipping Method"
                    mb="md"
                    placeholder="Shipping Method"
                    {...props.form.getInputProps("details.shippingMethod")}
                />
                <TextInput
                    label="Incoterm"
                    mb="md"
                    placeholder="Incoterm"
                    {...props.form.getInputProps("details.incoterm")}
                />
            </SimpleGrid>
            <Textarea
                label="Notes"
                mb="md"
                placeholder="Notes"
                {...props.form.getInputProps("details.notes")}
            />
            <Textarea
                label="Org Message"
                mb="md"
                placeholder="Org Message"
                {...props.form.getInputProps("details.orgMessage")}
            />
            <RecepieItemsAddHTML form={props.form} />
        </FormCard>
    )
}