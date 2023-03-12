import { Fragment, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useBatchCreateMutation, UpdateBatch, BatchCatalogue, Organization, useAutherQuery } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import BatchCatalogueSelectModal from 'common/select-table/BatchCatalogueSelectModal'
import { getOrgFromLocalStorage } from 'common/readLocalStorage'
import PageLoader from 'components/PageLoader'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Batches', href: '/inventory/batches' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface IBatchPageProps {
    title: string
}

export default function BatchNew(props: IBatchPageProps) {
    const router = useRouter()
    const [newBatch] = useBatchCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [batchCatModalOpened, setBatchCatModalOpened] = useState(false)
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            isManagement: false,
            batchUID: '',
            orgUID: '',

            orgName: '',
            batchNumber: '',
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

    const handleBatchCatalogueSelect = (item: BatchCatalogue | undefined) => {
        if (item) {
            form.values.batchUID = item?.uid!
            form.values.batchNumber = item?.batchNumber!
        }
    }

    const handleSubmit = () => {
        var newBatchInput: UpdateBatch = {
            uid: form.values.batchUID,
            orgUID: form.values.orgUID,
        }

        newBatch({
            variables: {input: newBatchInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Batch ${res.data.batchCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/inventory/batchs')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/inventory/batchs')
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
                    <BatchCatalogueSelectModal
                        opened={batchCatModalOpened}
                        setOpened={setBatchCatModalOpened}
                        handleSelect={handleBatchCatalogueSelect}
                        organizationUID={form.values.orgUID}
                    />
                }
                <TextInput
                    label="Batch Catalogue"
                    mb="md"
                    placeholder="Select Batch Catalogue"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setBatchCatModalOpened(true)}
                    {...form.getInputProps('batchNumber')}
                />
            </FormCard>
        </Page>
    )
}
