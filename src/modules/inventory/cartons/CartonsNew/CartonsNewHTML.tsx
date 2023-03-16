import { Fragment, useState } from "react"
import { Checkbox, TextInput } from "@mantine/core"
import FormCard from "components/FormCard"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import SkuSelectModal from "common/select-table/SkuSelectModal"
import BatchSelectModal from "common/select-table/BatchSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther, Batch, Organization, Sku, Warehouse } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"

export interface ICartonsFormValues {
    skuUID: string
    batchUID: string
    warehouseUID: string
    ownerUID: string
    quantity: number,

    skuID: string
    skuName: string
    batchNumber: string
    warehouseName: string
    ownerName: string
}

interface ICartonsNewHTML {
    title: string
    auther: Auther
    orgUID: string
    form: UseFormReturnType<ICartonsFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleSkuSelect: (item: Sku) => void
    handleBatchSelect: (item: Batch) => void
    handleWarehouseSelect: (item: Warehouse) => void
}

export default function CartonsNewHTML(props: ICartonsNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuModalOpened, setSkuModalOpened] = useState(false)
    const [batchModalOpened, setBatchModalOpened] = useState(false)
    const [warehouseModalOpened, setWarehouseModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Cartons', href: '/inventory/cartons' },
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
                            {...props.form.getInputProps('ownerName')}
                        />
                    </Fragment>
                }

                {props.form.values.ownerUID != "" &&
                    <SkuSelectModal
                        opened={skuModalOpened}
                        setOpened={setSkuModalOpened}
                        handleSelect={props.handleSkuSelect}
                        organizationUID={props.form.values.ownerUID}
                    />
                }
                <TextInput
                    label="SKU"
                    mb="md"
                    placeholder="Select SKU"
                    disabled={props.form.values.ownerUID != "" ? false : true}
                    onClick={() => setSkuModalOpened(true)}
                    {...props.form.getInputProps("skuName")}
                />

                {props.form.values.ownerUID != "" && props.form.values.skuUID != "" &&
                    <BatchSelectModal
                        opened={batchModalOpened}
                        setOpened={setBatchModalOpened}
                        handleSelect={props.handleBatchSelect}
                        organizationUID={props.form.values.ownerUID}
                        skuID={props.form.values.skuID}
                    />
                }
                <TextInput
                    label="Batch"
                    mb="md"
                    placeholder="Select Batch"
                    disabled={(props.form.values.ownerUID != "" && props.form.values.skuUID != "") ? false : true}
                    onClick={() => setBatchModalOpened(true)}
                    {...props.form.getInputProps("batchNumber")}
                />

                <WarehouseSelectModal
                    opened={warehouseModalOpened}
                    setOpened={setWarehouseModalOpened}
                    handleSelect={props.handleWarehouseSelect}
                    organizationUID={props.form.values.ownerUID}
                />
                <TextInput
                    label="Warehouse"
                    mb="md"
                    placeholder="Select Warehouse"
                    disabled={props.form.values.ownerUID != "" ? false : true}
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
            </FormCard>
        </Page>
    )
}
