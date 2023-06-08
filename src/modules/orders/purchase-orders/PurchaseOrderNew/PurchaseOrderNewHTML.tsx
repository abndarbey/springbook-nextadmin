import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Contact, Organization, SkuCatalogue, Warehouse } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SegmentedControl, SimpleGrid, Text, TextInput, Textarea } from "@mantine/core"
import ContactSelectModal from "common/select-table/ContactSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { PurchaseOrderFormValues } from "./PurchanseOrderNewTypes"
import PurchaseOrderItemsAddHTML from "./PurchaseOrderItemsAddHTML"

interface IPurchaseOrderNewHTMLProps {
    auther: Auther
    orgUID: string
    form: UseFormReturnType<PurchaseOrderFormValues>
    handleSubmit: () => void
    handleCancel: () => void
}

export default function PurchaseOrderNewHTML(props: IPurchaseOrderNewHTMLProps) {
    const [buyerModalOpened, setBuyerModalOpened] = useState(false)
    const [sellerModalOpened, setSellerModalOpened] = useState(false)
    const [warehouseModalOpened, setWarehouseModalOpened] = useState(false)
    const [isCustomAddress, setIsCustomAddress] = useState(false)

    const handleBuyerSelect = (item: Organization) => {
        if (item) {
            props.form.values.buyerUID = item.uid!
            props.form.values.buyerName = item.name!
        }
    }
    const handleSellerSelect = (item: Contact) => {
        if (item) {
            props.form.values.sellerUID = item.companyUID!
            props.form.values.sellerName = item.name!
        }
    }
    const handleWarehouseSelect = (item: Warehouse) => {
        if (item) {
            props.form.values.details.warehouseUID = item.uid!
            props.form.values.warehouseName = item.name!
        }
    }

    const handleIsCustomAddress = (value: string) => {
        if (value === 'warehouse') {
            setIsCustomAddress(false)
        }
        if (value === 'address') {
            setIsCustomAddress(true)
        }
    }

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
                        opened={buyerModalOpened}
                        setOpened={setBuyerModalOpened}
                        handleSelect={handleBuyerSelect}
                    />
                    <TextInput
                        label="Buyer"
                        mb="md"
                        placeholder="Select Buyer"
                        name="buyer"
                        onClick={() => setBuyerModalOpened(true)}
                        {...props.form.getInputProps("buyerName")}
                    />
                </Fragment>
            }
            {props.form.values.buyerUID != "" &&
                <ContactSelectModal
                    opened={sellerModalOpened}
                    setOpened={setSellerModalOpened}
                    handleSelect={handleSellerSelect}
                    organizationUID={props.form.values.buyerUID}
                />
            }
            <TextInput
                label="Seller"
                placeholder="Select Seller"
                name="seller"
                mb="md"
                disabled={props.form.values.buyerUID != "" ? false : true}
                onClick={() => setSellerModalOpened(true)}
                {...props.form.getInputProps('sellerName')}
            />

            <SegmentedControl
                size="sm"
                mb="md"
                onChange={(value: 'warehouse' | 'address') => handleIsCustomAddress(value)}
                data={[
                    {
                        value: 'warehouse',
                        label: 'Select Warehouse',
                    },
                    {
                        value: 'address',
                        label: 'Custom Address',
                    },
                ]}
            />
            {!isCustomAddress &&
                <Fragment>
                    {props.form.values.buyerUID != "" &&
                        <WarehouseSelectModal
                            opened={warehouseModalOpened}
                            setOpened={setWarehouseModalOpened}
                            handleSelect={handleWarehouseSelect}
                            organizationUID={props.form.values.buyerUID}
                        />
                    }
                    <TextInput
                        label="Warehouse"
                        placeholder="Select Warehouse"
                        name="warehouse"
                        mb="md"
                        disabled={props.form.values.buyerUID != "" ? false : true}
                        onClick={() => setWarehouseModalOpened(true)}
                        {...props.form.getInputProps('warehouseName')}
                    />
                </Fragment>
            }
            {isCustomAddress &&
                <Fragment>
                    <TextInput
                        label="Address Line 1"
                        placeholder="Address Line 1"
                        mb="md"
                        {...props.form.getInputProps("details.addressLine1")}
                    />
                    <TextInput
                        label="Address Line 2"
                        placeholder="Address Line 2"
                        mb="md"
                        {...props.form.getInputProps("details.addressLine2")}
                    />
                    <TextInput
                        label="Address Line 3"
                        placeholder="Address Line 3"
                        mb="md"
                        {...props.form.getInputProps("details.addressLine3")}
                    />
                    <SimpleGrid cols={3}>
                        <TextInput
                            label="City"
                            placeholder="City"
                            mb="md"
                            {...props.form.getInputProps("details.city")}
                        />
                        <TextInput
                            label="Country"
                            placeholder="Country"
                            mb="md"
                            {...props.form.getInputProps("details.country")}
                        />
                        <TextInput
                            label="Pincode"
                            placeholder="Pincode"
                            mb="md"
                            {...props.form.getInputProps("details.pincode")}
                        />
                    </SimpleGrid>
                </Fragment>
            }
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
                label="Buyer Message"
                mb="md"
                placeholder="Buyer Message"
                {...props.form.getInputProps("details.buyerMessage")}
            />
            <PurchaseOrderItemsAddHTML form={props.form} />
        </FormCard>
    )
}