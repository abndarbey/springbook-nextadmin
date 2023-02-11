import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import { useForm } from '@mantine/form'
import { TextInput, Textarea, SimpleGrid } from '@mantine/core'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'

interface IPalletTypeEditProps {
    code?: any
}

export default function PalletTypeEdit(props: IPalletTypeEditProps) {
    const router = useRouter()
    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'PalletTypes', href: '/warehouses/pallet-types' },
        { title: props.code, href: `/warehouses/pallet-types/${props.code}` },
        { title: 'Edit', href: '#' },
    ]
    const form = useForm({
            initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    })

    const handleSubmit = (values: any) => {
        console.log(values)
    }
    
    const handleCancel = (e: any) => {
        e.preventDefault()
        router.push(`/warehouses/pallet-types/${props.code}`)
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='Edit PalletType' />
            <FormCard
                submitButtonName='Update'
                handleSubmit={form.onSubmit((values) => {handleSubmit(values)})}
                handleCancel={handleCancel}
            >
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
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
                </SimpleGrid>

                <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    {...form.getInputProps('subject')}
                />
                <TextInput
                    label="StorageType"
                    placeholder="StorageType"
                    mt="md"
                    name="storageType"
                    {...form.getInputProps('StorageType')}
                />
                <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    {...form.getInputProps('message')}
                />
            </FormCard>
        </Page>
    )
}