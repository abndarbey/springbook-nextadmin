import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput, Select, Textarea, SimpleGrid } from '@mantine/core'
import { useWarehouseTypeCreateMutation, UpdateWarehouseType } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgDropdownSelect from 'common/dropSelect/OrgDropdownSelect'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Warehouse Types', href: '/warehouses/warehouse-types' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function WarehouseTypeNew() {
    const router = useRouter()
    const [newWT] = useWarehouseTypeCreateMutation({})

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            details: '',
            orgUID: '',
        },
    })

    // fetch organizations
    const orgSelectData = OrgDropdownSelect()

    const handleSubmit = () => {
        var newWTInput: UpdateWarehouseType = {
            name: form.values.name,
            details: form.values.details,
            orgUID: form.values.orgUID,
        }

        newWT({
            variables: {input: newWTInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Warehouse Type ${res.data.warehouseTypeCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/warehouses/warehouse-types/${res.data.warehouseTypeCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/warehouses/warehouse-types')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title=' New Warehouse Type' />
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
            </FormCard>
        </Page>
    )
}
