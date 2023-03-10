import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useBatchCatalogueCreateMutation, UpdateBatchCatalogue, Organization } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'
import { DatePicker } from '@mantine/dates'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import { PageProps } from 'types/types'
import SkuCatalogueSelectModal from 'common/select-table/SkuCatalogueSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Batch Catalogues', href: '/catalogues/batchCatalogues' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function BatchCatalogueNew(props: PageProps) {
    const router = useRouter()
    const [newobj] = useBatchCatalogueCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuModalOpened, setSkuModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: '',
            skuUID: '',
            batchNumber: '',
            description: '',
            productionDate: '',
            expiryDate: '',

            orgName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        form.values.orgUID = item.uid!
        form.values.orgName = item.name!
    }

    const handleSkuSelect = (item: Organization) => {
        form.values.skuUID = item.uid!
        form.values.orgName = item.name!
    }

    const handleSubmit = () => {
        var newobjInput: UpdateBatchCatalogue = {
            orgUID: form.values.orgUID,
            skuUID: form.values.skuUID,
            batchNumber: form.values.batchNumber,
            description: form.values.description,
            productionDate: form.values.productionDate,
            expiryDate: form.values.expiryDate,
        }

        newobj({
            variables: {input: newobjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `BatchCatalogue ${res.data.batchCatalogueCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/catalogues/batches/${res.data.batchCatalogueCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/catalogues/batchCatalogues')
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
                <SkuCatalogueSelectModal
                    opened={skuModalOpened}
                    setOpened={setSkuModalOpened}
                    handleSelect={handleSkuSelect}
                />
                <TextInput
                    label="Sku UID"
                    placeholder="Sku UID"
                    mt="md"
                    name="skuUID"
                    onClick={() => setSkuModalOpened(true)}
                    {...form.getInputProps('skuUID')}
                />
                <TextInput
                    label="Batch Number"
                    placeholder="Batch Number"
                    mt="md"
                    name="batchNumber"
                    {...form.getInputProps('batchNumber')}
                />
                <TextInput
                    label="Description"
                    placeholder="Description"
                    mt="md"
                    name="description"
                    {...form.getInputProps('description')}
                />
                <DatePicker placeholder="Pick date" label="Production date" withAsterisk />
                <DatePicker placeholder="Pick date" label="EXpiry date" withAsterisk />
            </FormCard>
        </Page>
    )
}
