import { useState } from "react"
import Page from "components/Page"

import PageHeader from "components/PageHeader"
import FormCard from "components/FormCard"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import { INavTrailProps } from "components/NavTrails"
import { Auther,Organization, Sku } from "@lib/generated/hooks"
import { UseFormReturnType } from "@mantine/form"
import { TextInput } from "@mantine/core"
import SkuCatalogueSelectModal from "common/select-table/SkuSelectModal"
import { DatePicker } from '@mantine/dates'


interface IBatchFormValues {
    orgUID: string,
    skuUID: string,
    batchNumber: string,
    description: string,
    productionDate: string,
    expiryDate: string,

    orgName: string,
}


interface IBatchNewHTML {
    title: string
    auther: Auther
    orgUID: string
    form: UseFormReturnType<IBatchFormValues>
    handleSubmit: () => void
    handleCancel: () => void
    handleOrgSelect: (item: Organization) => void
    handleSkuSelect: (item: Sku) => void
}




export default function BatchNewHTML(props: IBatchNewHTML){
const [orgModalOpened, setOrgModalOpened] = useState(false)
const [skuModalOpened, setSkuModalOpened] = useState(false)

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Batch Catalogues', href: '/catalogues/batchCatalogues' },
    { title: 'New', href: '#' },
]


return (

<Page navTrails={navTrails}>
<PageHeader title={props.title!} />
<FormCard
    submitButtonName='Create'
    handleSubmit={props.form.onSubmit(props.handleSubmit)}
    handleCancel={props.handleCancel}
>
    <OrgSelectModal
        opened={orgModalOpened}
        setOpened={setOrgModalOpened}
        handleSelect={props.handleOrgSelect}
    />
    <TextInput
        label="Organization"
        placeholder="Select Organization"
        name="organization"
        onClick={() => setOrgModalOpened(true)}
        {...props.form.getInputProps('orgName')}
    />
    <SkuCatalogueSelectModal
        opened={skuModalOpened}
        setOpened={setSkuModalOpened}
        handleSelect={props.handleSkuSelect}
    />
    <TextInput
        label="Sku UID"
        placeholder="Sku UID"
        mt="md"
        name="skuUID"
        onClick={() => setSkuModalOpened(true)}
        {...props.form.getInputProps('skuUID')}
    />
    <TextInput
        label="Batch Number"
        placeholder="Batch Number"
        mt="md"
        name="batchNumber"
        {...props.form.getInputProps('batchNumber')}
    />
    <TextInput
        label="Description"
        placeholder="Description"
        mt="md"
        name="description"
        {...props.form.getInputProps('description')}
    />
    <DatePicker placeholder="Pick date" label="Production date" withAsterisk />
    <DatePicker placeholder="Pick date" label="EXpiry date" withAsterisk />
</FormCard>
</Page>
)
}