import { Fragment, useState } from 'react'
import { UseFormReturnType } from '@mantine/form'
import { Group, Box, Text, Button, TextInput, SimpleGrid, ActionIcon } from '@mantine/core'
import { RecepieFormValues } from './RecepieNewTypes'
import { IconTrash } from '@tabler/icons'
import { Sku } from 'gql/generated/hooks'
import SkuSelectModal from 'common/select-table/SkuSelectModal'

interface IRecepieItemsAddHTMLProps {
    form: UseFormReturnType<RecepieFormValues>
}

export default function RecepieItemsAddHTML(props: IRecepieItemsAddHTMLProps) {
    const [skuModalOpened, setSkuModalOpened] = useState(false)

    const handleSkuSelect = (index: number, item: Sku) => {
        if (item) {
            props.form.values.items[index].skuID = item.id!
            props.form.values.items[index].skuName = item.name!
        }
    }

    const handleAddItem = () => {
        props.form.insertListItem(
            'items',
            {
                skuID: null,
                units: 0,
                unitOfMeasure: '',
            })
    }

    const handleRemoveItem = (index: number) => {
        props.form.removeListItem('items', index)
    }

    const fields = props.form.values.items.map((_, index) => (
        <Box key={index}>
            <SimpleGrid cols={5}>
                <SkuSelectModal
                    opened={skuModalOpened}
                    setOpened={setSkuModalOpened}
                    handleSelect={(item: Sku) => handleSkuSelect(index, item)}
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
                <Text size={14}>UoM</Text>
            </SimpleGrid>
            {fields}
            <Group position="left" mb="md">
                <Button onClick={() => handleAddItem()}>
                    +
                </Button>
            </Group>
        </Fragment>
    )
}