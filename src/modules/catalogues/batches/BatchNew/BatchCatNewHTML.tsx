import { Fragment, useState } from "react"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Organization, SkuCatalogue } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, TextInput } from "@mantine/core"
import { DatePicker } from "@mantine/dates"
import SkuCatalogueSelectModal from "common/select-table/SkuCatalogueSelectModal"

interface IBatchCatFormValues {
    orgUID: string,
    skuUID: string,
    batchNumber: string,
    description: string,
    productionDate: string,
    expiryDate: string,

    orgName: string,
    skuName: string,
}

interface IBatchCatNewHTML {
    auther: Auther
    orgUID: string
    form: UseFormReturnType<IBatchCatFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleSkuSelect: (item: SkuCatalogue) => void
}

export default function BatchCatNewHTML(props: IBatchCatNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuModalOpened, setSkuModalOpened] = useState(false)

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
            {props.form.values.orgUID != "" &&
                <SkuCatalogueSelectModal
                    opened={skuModalOpened}
                    setOpened={setSkuModalOpened}
                    handleSelect={props.handleSkuSelect}
                    organizationUID={props.form.values.orgUID}
                />
            }
            <TextInput
                label="SKU"
                placeholder="SKU"
                mb="md"
                disabled={props.form.values.orgUID != "" ? false : true}
                onClick={() => setSkuModalOpened(true)}
                {...props.form.getInputProps("skuName")}
            />
            
            <TextInput
                label="Batch Number"
                placeholder="Batch Number"
                mb="md"
                name="batchNumber"
                {...props.form.getInputProps('batchNumber')}
            />
            <TextInput
                label="Description"
                placeholder="Description"
                mb="md"
                name="description"
                {...props.form.getInputProps('description')}
            />
            <SimpleGrid cols={2}>
                <DatePicker
                    withAsterisk
                    placeholder="Pick date"
                    label="Production Date"
                    {...props.form.getInputProps('productionDate')}
                />
                <DatePicker
                    withAsterisk
                    placeholder="Pick date"
                    label="Expiry Date"
                    {...props.form.getInputProps('expiryDate')}
                />
            </SimpleGrid>
        </FormCard>
    )
}