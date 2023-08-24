import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useBatchUpdateMutation, UpdateBatch, Organization, useBatchQuery } from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import PageLoader from 'components/PageLoader'
import { PageProps } from 'types/types'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgID: Yup.string().min(2, 'Invalid org ID'),
})

export default function BatchEdit(props: PageProps) {
    const router = useRouter()
    const [updateDept] = useBatchUpdateMutation({})
    const [formData, setFormData] = useState(false)
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Batchs', href: '/inventory/batches' },
        { title: props.code, href: `/inventory/batches/${props.code}` },
        { title: 'Edit', href: '#' },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            uid: '',
            orgID: '',

            batchNumber: '',
            orgName: '',
        },
    })

    // fetch data
    const { data, loading, error } = useBatchQuery(
        { variables: { code: props.code } }
    )
    if (loading) {
        return (
            <PageLoader />
        )
    }
    if (!loading && error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: error.message,
        })
        return <PageLoader isError={true} />
    }
    if (data && !formData) {
        form.setValues(
            {
                uid: data.batch?.id!,
                orgID: data.batch.organization?.id,
                batchNumber: data.batch?.batchNumber!,
                orgName: data.batch.organization?.name!
            }
        )
        setFormData(true)
    }

    const handleOrgSelect = (item: Organization) => {
        form.values.orgID = item.id!
        form.values.orgName = item.name!
    }

    const handleSubmit = () => {
        var updateDeptInput: UpdateBatch = {
            uid: form.values.id,
            orgID: form.values.orgID,
        }

        updateDept({
            variables: {id: data?.batch.id!, input: updateDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Batch ${res.data.batchUpdate.batchNumber} Updated`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/inventory/batches/${res.data.batchUpdate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push(`/inventory/batches/${props.code}`)
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <FormCard
                submitButtonName='Update'
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
                    disabled={true}
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
            </FormCard>
        </Page>
    )
}
