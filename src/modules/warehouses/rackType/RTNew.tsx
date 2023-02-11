import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput, Select, Textarea, SimpleGrid } from '@mantine/core'
import { useRackTypeCreateMutation, UpdateRackType } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgDropdownSelect from 'common/dropSelect/OrgDropdownSelect'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Rack Types', href: '/warehouses/rack-types' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function RackTypeNew() {
    const router = useRouter()
    const [newWT] = useRackTypeCreateMutation({})

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            details: '',
            orgUID: '',
            storageType: '',
        },
    })

    // fetch organizations
    const orgSelectData = OrgDropdownSelect()

    const handleSubmit = () => {
        var newWTInput: UpdateRackType = {
            name: form.values.name,
            orgUID: form.values.orgUID,
            storageType: form.values.storageType,
        }
            console.log(newWTInput)
        newWT({
            variables: {input: newWTInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Rack Type ${res.data.rackTypeCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/warehouses/rack-types/${res.data.rackTypeCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/Warehouses/rack-types')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title=' New Rack Type' />
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
                <TextInput
                    label="Storage Type"
                    placeholder="StorageType"
                    mt="md"
                    name="storageType"
                    {...form.getInputProps('storageType')}
                />
                <Textarea
                    label="Details"
                    placeholder="Details"
                    mt="md"
                    name="details"
                    {...form.getInputProps('details')}
                />
            </FormCard>
        </Page>
    )
}
