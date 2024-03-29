import { Fragment, useState } from "react"
import { Checkbox, Select, TextInput } from "@mantine/core"
import FormCard from "components/FormCard"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import SkuSelectModal from "common/select-table/SkuSelectModal"
import BatchSelectModal from "common/select-table/BatchSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, Batch, Organization, Sku, Warehouse } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"

export interface QrOrderFormValues {
    objectType: undefined
    skuID: any
    batchID: any
    warehouseID: any
    orgID: any
    quantity: number,
    weight: number,

    skuLocalID: string
    skuName: string
    batchNumber: string
    warehouseName: string
    orgName: string
}

interface QrOrderNewHTML {
    title: string
    auther: Auther
    orgID: string
    form: UseFormReturnType<QrOrderFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleSkuSelect: (item: Sku) => void
    handleBatchSelect: (item: Batch) => void
    handleWarehouseSelect: (item: Warehouse) => void
}

export default function QrOrderNewHTML(props: QrOrderNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuModalOpened, setSkuModalOpened] = useState(false)
    const [batchModalOpened, setBatchModalOpened] = useState(false)
    const [warehouseModalOpened, setWarehouseModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Qr Order', href: '/inventory/qr-orders' },
        { title: 'New', href: '#' },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title} />
            <FormCard
                submitButtonName='Create'
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
                            {...props.form.getInputProps('orgName')}
                        />
                    </Fragment>
                }

                <Select
                    label="Object Type"
                    placeholder="Pick one"
                    mb="md"
                    data={[
                        { value: 'CARTON', label: 'Carton' },
                        { value: 'PALLET', label: 'Pallet' },
                        { value: 'CONTAINER', label: 'Container' },
                    ]}
                    {...props.form.getInputProps("objectType")}
                />

                {props.form.values.orgID != "" && props.form.values.objectType == "CARTON" &&
                    <>
                        <SkuSelectModal
                            opened={skuModalOpened}
                            setOpened={setSkuModalOpened}
                            handleSelect={props.handleSkuSelect}
                            organizationID={props.form.values.orgID}
                        />
                        <TextInput
                            label="SKU"
                            mb="md"
                            placeholder="Select SKU"
                            disabled={props.form.values.orgID != "" ? false : true}
                            onClick={() => setSkuModalOpened(true)}
                            {...props.form.getInputProps("skuName")}
                        />
                    </>
                    
                }

                {props.form.values.orgID != "" && props.form.values.skuID &&  props.form.values.objectType == "CARTON" &&
                    <>
                        <BatchSelectModal
                            opened={batchModalOpened}
                            setOpened={setBatchModalOpened}
                            handleSelect={props.handleBatchSelect}
                            organizationID={props.form.values.orgID}
                            skuID={props.form.values.skuLocalID}
                        />
                        <TextInput
                            label="Batch"
                            mb="md"
                            placeholder="Select Batch"
                            disabled={(props.form.values.orgID != "" && props.form.values.skuID != "") ? false : true}
                            onClick={() => setBatchModalOpened(true)}
                            {...props.form.getInputProps("batchNumber")}
                        />
                    </>
                }

                {props.form.values.orgID != "" &&
                    <WarehouseSelectModal
                        opened={warehouseModalOpened}
                        setOpened={setWarehouseModalOpened}
                        handleSelect={props.handleWarehouseSelect}
                        organizationID={props.form.values.orgID}
                    />
                }

                <TextInput
                    label="Warehouse"
                    mb="md"
                    placeholder="Select Warehouse"
                    disabled={props.form.values.orgID != "" ? false : true}
                    onClick={() => setWarehouseModalOpened(true)}
                    {...props.form.getInputProps("warehouseName")}
                />

                <TextInput
                    label="Quantity"
                    type="number"
                    placeholder="Quantity"
                    mb="md"
                    name="quantity"
                    {...props.form.getInputProps('quantity')}
                />

                <TextInput
                    label="Weight"
                    type="number"
                    placeholder="Weight"
                    mb="md"
                    name="quantity"
                    {...props.form.getInputProps('weight')}
                />
            </FormCard>
        </Page>
    )
}
