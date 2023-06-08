import { Fragment, useState } from 'react'
import { UseFormReturnType, useForm } from '@mantine/form'
import { Group, Box, Text, Code, Button, TextInput, SimpleGrid, Grid, ActionIcon } from '@mantine/core'
import { PurchaseOrderFormValues, PurchaseOrderItemFromValues } from './PurchanseOrderNewTypes'
import { IconTrash } from '@tabler/icons'
import { SkuCatalogue } from 'gql/generated/hooks'
import NexportSkuCatalogueSelectModal from 'common/select-table/NexportSkuSelectModal'

interface IPurchaseOrderItemsAddHTMLProps {
    form: UseFormReturnType<PurchaseOrderFormValues>
}

export default function PurchaseOrderItemsAddHTML(props: IPurchaseOrderItemsAddHTMLProps) {
    const [skuModalOpened, setSkuModalOpened] = useState(false)

    const handleSkuSelect = (index: number, item: SkuCatalogue) => {
        if (item) {
            props.form.values.items[index].skuUID = item.uid!
            props.form.values.items[index].skuName = item.name!
        }
    }

    const handleAddItem = () => {
        props.form.insertListItem(
            'items',
            {
                skuUID: null,
                units: 0,
                unitCost: 0,
                unitOfMeasure: '',
            })
    }

    const handleRemoveItem = (index: number) => {
        props.form.removeListItem('items', index)
    }

    const fields = props.form.values.items.map((_, index) => (
        <Box key={index}>
            <SimpleGrid cols={5}>
                <NexportSkuCatalogueSelectModal
                    opened={skuModalOpened}
                    setOpened={setSkuModalOpened}
                    handleSelect={(item: SkuCatalogue) => handleSkuSelect(index, item)}
                />
                <TextInput
                    mb="md"
                    placeholder="Select SKU"
                    onClick={() => setSkuModalOpened(true)}
                    {...props.form.getInputProps(`items.${index}.skuName`)}
                />
                <TextInput
                    mb="md"
                    type='number'
                    placeholder="0"
                    {...props.form.getInputProps(`items.${index}.units`)}
                />
                <TextInput
                    mb="md"
                    type='number'
                    placeholder="0"
                    {...props.form.getInputProps(`items.${index}.unitCost`)}
                />
                <TextInput
                    mb="md"
                    placeholder="KG"
                    {...props.form.getInputProps(`items.${index}.unitOfMeasure`)}
                />
                <ActionIcon color="red" onClick={() => handleRemoveItem(index)}>
                    <IconTrash size={20} stroke={1.5} />
                </ActionIcon>
            </SimpleGrid>
        </Box>
    ))

    return (
        <Fragment>
            <Text size={16} weight={700}>Items</Text>
            <SimpleGrid cols={5}>
                <Text size={14}>SKU</Text>
                <Text size={14}>Units</Text>
                <Text size={14}>Unit Cost</Text>
                <Text size={14}>UoM</Text>
            </SimpleGrid>
            {fields}
            <Group position="left" mb="md">
                <Button onClick={() => handleAddItem()}>
                    +
                </Button>
            </Group>

            {/* <Text size="sm" weight={500} mt="md">
                Form values:
            </Text>
            <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}
        </Fragment>
    )
}