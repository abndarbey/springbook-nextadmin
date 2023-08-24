import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { Auther, Organization, RackType, Warehouse } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, Textarea, TextInput } from "@mantine/core"
import RackTypeSelectModal from "common/select-table/RTSelectModal"

interface IRackFormValues {
    orgID: string,
    typeID: string,
    warehouseID: string,
    rows: number,
    columns: number,

    rtCode: string,
    whName: string,
    orgName: string,
}

interface IRackNewHTML {
    auther: Auther
    orgID: string
    whID: string
    form: UseFormReturnType<IRackFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleWarehouseSelect: (item: Warehouse) => void
    handleRackTypeSelect: (item: RackType) => void
}

export default function RackNewHTML(props: IRackNewHTML) {
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
            {/* Select Warehouse */}
            {props.form.values.orgID != "" &&
                <WarehouseSelectModal
                    opened={whModalOpened}
                    setOpened={setWhModalOpened}
                    handleSelect={props.handleWarehouseSelect}
                    organizationID={props.form.values.orgID}
                    isThirdParty={false}
                />
            }
            <TextInput
                label="Warehouse"
                mb="md"
                placeholder="Select Warehouse"
                name="warehouseID"
                disabled={props.form.values.orgID == ""}
                onClick={() => setWhModalOpened(true)}
                {...props.form.getInputProps("whName")}
            />
            {/* Select RackT ype */}
            {props.form.values.orgID != "" &&
                <RackTypeSelectModal
                    opened={rtModalOpened}
                    setOpened={setRTModalOpened}
                    handleSelect={props.handleRackTypeSelect}
                />
            }
            <TextInput
                label="Rack Type"
                mb="md"
                placeholder="Select Rack Type"
                name="typeID"
                disabled={props.form.values.orgID == ""}
                onClick={() => setRTModalOpened(true)}
                {...props.form.getInputProps("rtCode")}
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                    label="Rows"
                    placeholder="Enter no. of Rows"
                    type="number"
                    mb="md"
                    name="rows"
                    {...props.form.getInputProps("rows")}
                />
                <TextInput
                    label="Columns"
                    placeholder="Enter no. of Columns"
                    type="number"
                    mb="md"
                    name="columns"
                    {...props.form.getInputProps("columns")}
                />
            </SimpleGrid>
        </FormCard>
    )
}