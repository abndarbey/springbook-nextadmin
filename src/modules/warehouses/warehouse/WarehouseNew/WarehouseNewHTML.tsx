import { Fragment, useState } from "react"

import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { Auther, Organization, WarehouseType, Warehouse } from "gql/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { SimpleGrid, Textarea, TextInput } from "@mantine/core"
import WarehouseTypeSelectModal from "common/select-table/WTSelectModal"

interface IGeoLocationValues {
    lat: number
    lon: number
}
interface IWarehouseFormValues {
    orgUID: string,
    typeID: string,
    name: string,
    details: string,
    geoLocation: IGeoLocationValues,
    locality: string,
    city: string,
    pincode: string,

    wtName: string,
    orgName: string,
}

interface IWarehouseNewHTML {
    auther: Auther
    orgUID: string
    whUID: string
    form: UseFormReturnType<IWarehouseFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleWarehouseTypeSelect: (item: WarehouseType) => void
}

export default function WarehouseNewHTML(props: IWarehouseNewHTML) {
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [wtModalOpened, setWTModalOpened] = useState(false)

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
            {/* Select WarehouseT ype */}
            {props.form.values.orgUID != "" &&
                <WarehouseTypeSelectModal
                    opened={wtModalOpened}
                    setOpened={setWTModalOpened}
                    handleSelect={props.handleWarehouseTypeSelect}
                />
            }
            <TextInput
                label="Warehouse Type"
                mb="md"
                placeholder="Select Warehouse Type"
                name="typeID"
                disabled={props.form.values.orgUID == ""}
                onClick={() => setWTModalOpened(true)}
                {...props.form.getInputProps("wtName")}
            />
            <TextInput
                label="Name"
                placeholder="Name"
                type="text"
                mb="md"
                name="rows"
                {...props.form.getInputProps("name")}
            />
            <Textarea
                label="Description"
                placeholder="Description"
                mb="md"
                name="details"
                {...props.form.getInputProps("details")}
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                    label="latitude"
                    placeholder="latitude"
                    type="number"
                    mb="md"
                    name="lat"
                    {...props.form.getInputProps("geoLocation.lat")}
                />
                <TextInput
                    label="Longitude"
                    placeholder="Longitude"
                    type="number"
                    mb="md"
                    name="lon"
                    {...props.form.getInputProps("geoLocation.lon")}
                />
            </SimpleGrid>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                    label="Locality"
                    placeholder="Locality"
                    type="text"
                    mb="md"
                    name="locality"
                    {...props.form.getInputProps("locality")}
                />
                <TextInput
                    label="City"
                    placeholder="City"
                    type="text"
                    mb="md"
                    name="city"
                    {...props.form.getInputProps("city")}
                />
                <TextInput
                    label="Pincode"
                    placeholder="Pincode"
                    type="text"
                    mb="md"
                    name="pincode"
                    {...props.form.getInputProps("pincode")}
                />
            </SimpleGrid>
        </FormCard>
    )
}