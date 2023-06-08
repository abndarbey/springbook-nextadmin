import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"
import { Auther, Organization, RackType, Warehouse } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, Textarea, TextInput } from "@mantine/core"
import RackTypeSelectModal from "common/select-table/RTSelectModal"

interface IRackFormValues {
    orgUID: string,
    typeID: string,
    warehouseUID: string,
    rows: number,
    columns: number,

    rtCode: string,
    whName: string,
    orgName: string,
}

interface IRackNewHTML {
    auther: Auther
    orgUID: string
    whUID: string
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
            {/* Select RackT ype */}
            {props.form.values.orgUID != "" &&
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
                disabled={props.form.values.orgUID == ""}
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