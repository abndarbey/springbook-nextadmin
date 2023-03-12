import { Fragment, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useSkuCreateMutation, UpdateSku, SkuCatalogue, Organization, useAutherQuery } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import SkuCatalogueSelectModal from 'common/select-table/SkuCatalogueSelectModal'
import { getOrgFromLocalStorage } from 'common/readLocalStorage'
import PageLoader from 'components/PageLoader'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Skus', href: '/inventory/skus' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface ISkuPageProps {
    title: string
}

export default function SkuNew(props: ISkuPageProps) {
    const router = useRouter()
    const [newSku] = useSkuCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuCatModalOpened, setSkuCatModalOpened] = useState(false)
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            isManagement: false,
            skuUID: '',
            orgUID: '',

            orgName: '',
            skuName: '',
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const orgObj = getOrgFromLocalStorage()
        setOrgUID(orgObj.uid)
        if (orgObj.uid != "" && orgObj.name) {
            form.values.orgUID = orgObj.uid!
            form.values.orgName = orgObj.name!
        }
    }, [orgUID, form])

    // load auther
    const authData = useAutherQuery()
    if (authData.loading) {
        return (
            <PageLoader />
        )
    }
    if (authData.error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: authData.error.message,
        })
        return <PageLoader isError={true} />
    }
    if (authData.data && !autherLoaded) {
        if (!authData.data.auther.isAdmin) {
            form.setValues({ orgUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
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
            <PageHeader title={props.title} />
            <FormCard
                submitButtonName='Create'
                handleSubmit={form.onSubmit(handleSubmit)}
                handleCancel={handleCancel}
            >
                {/* Select Contractor */}
                {authData.data?.auther.isAdmin && orgUID == "" &&
                    <Fragment>
                        <OrgSelectModal
                            opened={orgModalOpened}
                            setOpened={setOrgModalOpened}
                            handleSelect={handleOrgSelect}
                        />
                        <TextInput
                            label="Organization"
                            mb="md"
                            placeholder="Select Organization"
                            name="organization"
                            onClick={() => setOrgModalOpened(true)}
                            {...form.getInputProps('orgName')}
                        />
                    </Fragment>
                }

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
                    mb="md"
                    placeholder="Select Sku Catalogue"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setSkuCatModalOpened(true)}
                    {...form.getInputProps('skuName')}
                />
            </FormCard>
        </Page>
    )
}
