import { useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useSkuCreateMutation, UpdateSku, SkuCatalogue, Organization } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import SkuCatalogueSelectModal from 'common/select-table/SkuCatalogueSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Skus', href: '/inventory/skus' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function SkuNew() {
    const router = useRouter()
    const [newSku] = useSkuCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [ownerModalOpened, setOwnerModalOpened] = useState(false)
    const [skuCatModalOpened, setSkuCatModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            isManagement: false,
            skuUID: '',
            orgUID: '',
            ownerUID: '',

            orgName: '',
            ownerName: '',
            skuName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleOwnerSelect = (item: Organization) => {
        console.log("select owner")
        if (item) {
            console.log(item)
            form.values.ownerUID = item.uid!
            form.values.ownerName = item.name!
        }
    }

    const handleSkuCatalogueSelect = (item: SkuCatalogue | undefined) => {
        if (item) {
            form.values.skuUID = item?.uid!
            form.values.skuName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newSkuInput: UpdateSku = {
            uid: form.values.skuUID,
            orgUID: form.values.orgUID,
            ownerUID: form.values.ownerUID,
        }

        newSku({
            variables: {input: newSkuInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Sku ${res.data.skuCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/inventory/skus')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/inventory/skus')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New Sku' />
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

                <OrgSelectModal
                    opened={ownerModalOpened}
                    setOpened={setOwnerModalOpened}
                    handleSelect={handleOwnerSelect}
                />
                <TextInput
                    label="Owner"
                    mt="md"
                    placeholder="Select Owner"
                    name="owner"
                    onClick={() => setOwnerModalOpened(true)}
                    {...form.getInputProps('ownerName')}
                />

                {form.values.orgUID != "" &&
                    <SkuCatalogueSelectModal
                        opened={skuCatModalOpened}
                        setOpened={setSkuCatModalOpened}
                        handleSelect={handleSkuCatalogueSelect}
                        organizationUID={form.values.orgUID}
                    />
                }
                <TextInput
                    label="Sku Catalogue"
                    placeholder="Select Sku Catalogue"
                    mt="md"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setSkuCatModalOpened(true)}
                    {...form.getInputProps('skuName')}
                />
            </FormCard>
        </Page>
    )
}
