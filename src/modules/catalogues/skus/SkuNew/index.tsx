import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { SimpleGrid, Textarea, TextInput } from '@mantine/core'
import { useSkuCatalogueCreateMutation, UpdateSkuCatalogue, Organization } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import { PageProps } from 'types/types'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Sku Catalogues', href: '/catalogues/skus' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function SkuCatalogueNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useSkuCatalogueCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: '',
            name: '',
            hsnCode: '',
            brand: '',
            description: '',
            ingredients: '',
            weight: '',
            weightUnit: '',

            orgName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateSkuCatalogue = {
            orgUID: form.values.orgUID,
            name: form.values.name,
            hsnCode: form.values.hsnCode,
            brand: form.values.brand,
            description: form.values.description,
            ingredients: form.values.ingredients,
            weight: form.values.weight,
            weightUnit: form.values.weightUnit,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Sku Catalogue ${res.data.skuCatalogueCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/catalogues/skus/${res.data.skuCatalogueCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/catalogues/skus')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <FormCard
                submitButtonName='Create'
                handleSubmit={form.onSubmit(handleSubmit)}
                handleCancel={handleCancel}
            >
                <OrgSelectModal
                    opened={orgModalOpened}
                    setOpened={setOrgModalOpened}
                    handleSelect={handleOrgSelect}
                />
                <TextInput
                    label="Organization"
                    placeholder="Select Organization"
                    name="organization"
                    onClick={() => setOrgModalOpened(true)}
                    {...form.getInputProps('orgName')}
                />
                <TextInput
                    label="Name"
                    placeholder="Name"
                    mt="md"
                    name="name"
                    {...form.getInputProps('name')}
                />
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="HSN Code"
                        placeholder="HSN Code"
                        mt="md"
                        name="hsnCode"
                        {...form.getInputProps('hsnCode')}
                    />
                    <TextInput
                        label="Brand"
                        placeholder="Brand"
                        mt="md"
                        name="brand"
                        {...form.getInputProps('brand')}
                    />
                </SimpleGrid>
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="Weight"
                        placeholder="Weight"
                        mt="md"
                        type="number"
                        name="weight"
                        {...form.getInputProps('weight')}
                    />
                    <TextInput
                        label="Weight Unit"
                        placeholder="Weight Unit"
                        mt="md"
                        name="weightUnit"
                        {...form.getInputProps('weightUnit')}
                    />
                </SimpleGrid>
                <Textarea
                    label="Description"
                    placeholder="Description"
                    mt="md"
                    name="description"
                    {...form.getInputProps('description')}
                />
                <Textarea
                    label="Ingredeints"
                    placeholder="Ingredeints"
                    mt="md"
                    name="ingredeints"
                    {...form.getInputProps('ingredeints')}
                />
            </FormCard>
        </Page>
    )
}
