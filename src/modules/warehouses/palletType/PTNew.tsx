import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput, Select, Textarea, SimpleGrid } from '@mantine/core'
import { usePalletTypeCreateMutation, UpdatePalletType } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgDropdownSelect from 'common/dropSelect/OrgDropdownSelect'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Pallet Types', href: '/warehouses/pallet-types' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function PalletTypeNew() {
    const router = useRouter()
    const [newPT] = usePalletTypeCreateMutation({})

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            details: '',
            orgUID: '',
            length: '',
            breadth: '',
            weightCapacity: '',
            weightUnit : '',
        },
    })

    // fetch organizations
    const orgSelectData = OrgDropdownSelect()

    const handleSubmit = () => {
        var newPTInput: UpdatePalletType = {
            name: form.values.name,
            orgUID: form.values.orgUID,
            length: form.values.length,
            breadth: form.values.breadth,
            weightCapacity: form.values.weightCapacity,
            weightUnit: form.values.weightUnit,
        }

        newPT({
            variables: {input: newPTInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Pallet Type ${res.data.palletTypeCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/warehouses/pallet-types/${res.data.palletTypeCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/warehouses/pallet-types')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title=' New Pallet Type' />
            <FormCard
                submitButtonName='Create'
                handleSubmit={form.onSubmit(handleSubmit)}
                handleCancel={handleCancel}
            >
                {/* <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        {...form.getInputProps('email')}
                    />
                </SimpleGrid> */}
                <TextInput
                    label="Name"
                    placeholder="Name"
                    mt="md"
                    name="name"
                    {...form.getInputProps('name')}
                />
                <Textarea
                    label="Details"
                    placeholder="Details"
                    mt="md"
                    name="details"
                    {...form.getInputProps('details')}
                />
                <TextInput
                    label="length"
                    placeholder="length"
                    type="number"
                    mt="md"
                    name="length"
                    {...form.getInputProps('length')}
                />
                <TextInput
                    label="breadth"
                    placeholder="breadth"
                    type="number"
                    mt="md"
                    name="breadth"
                    {...form.getInputProps('breadth')}
                />
                <TextInput
                    label="weightCapacity"
                    placeholder="weightCapacity"
                    type="number"
                    mt="md"
                    name="weightCapacity"
                    {...form.getInputProps('weightCapacity')}
                />
                <TextInput
                    label="weightUnit"
                    placeholder="weightUnit"
                    mt="md"
                    name="weightUnit"
                    {...form.getInputProps('weightUnit')}
                />
            </FormCard>
        </Page>
    )
}
