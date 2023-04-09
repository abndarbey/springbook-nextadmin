import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { Auther, Organization, PalletType, Warehouse } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, Textarea, TextInput } from "@mantine/core"
import PalletTypeSelectModal from "common/select-table/PTSelectModal"

interface IPalletFormValues {
    orgUID: string,
    typeID: string,
    warehouseUID: string,
    quantity: number,

    rtCode: string,
    whName: string,
    orgName: string,
}

interface IPalletNewHTML {
    auther: Auther
    orgUID: string
    whUID: string
    form: UseFormReturnType<IPalletFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleWarehouseSelect: (item: Warehouse) => void
    handlePalletTypeSelect: (item: PalletType) => void
}

export default function PalletNewHTML(props: IPalletNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [rtModalOpened, setRTModalOpened] = useState(false)
    const [whModalOpened, setWhModalOpened] = useState(false)

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
            {/* Select Warehouse */}
            {props.form.values.orgUID != "" &&
                <WarehouseSelectModal
                    opened={whModalOpened}
                    setOpened={setWhModalOpened}
                    handleSelect={props.handleWarehouseSelect}
                    organizationUID={props.form.values.orgUID}
                    isThirdParty={false}
                />
            }
            <TextInput
                label="Warehouse"
                mb="md"
                placeholder="Select Warehouse"
                name="warehouseUID"
                disabled={props.form.values.orgUID == ""}
                onClick={() => setWhModalOpened(true)}
                {...props.form.getInputProps("whName")}
            />
            {/* Select PalletT ype */}
            {props.form.values.orgUID != "" &&
                <PalletTypeSelectModal
                    opened={rtModalOpened}
                    setOpened={setRTModalOpened}
                    handleSelect={props.handlePalletTypeSelect}
                />
            }
            <TextInput
                label="Pallet Type"
                mb="md"
                placeholder="Select Pallet Type"
                name="typeID"
                disabled={props.form.values.orgUID == ""}
                onClick={() => setRTModalOpened(true)}
                {...props.form.getInputProps("rtCode")}
            />
            <TextInput
                label="Quantity"
                placeholder="Quantity"
                type="number"
                mb="md"
                name="quantity"
                {...props.form.getInputProps("quantity")}
            />
        </FormCard>
    )
}