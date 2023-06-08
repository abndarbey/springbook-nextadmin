import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { Textarea, TextInput } from '@mantine/core'
import { useWarehouseTypeUpdateMutation, UpdateWarehouseType, Organization, useWarehouseTypeQuery, Warehouse, WarehouseType} from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import PageLoader from 'components/PageLoader'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface IWarehouseTypeEditProps {
    code?: any
}

export default function WarehouseTypeEdit(props: IWarehouseTypeEditProps) {
    const router = useRouter()
    const [updateDept] = useWarehouseTypeUpdateMutation({})
    const [formData, setFormData] = useState(false)
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'WarehouseTypes', href: '/warehouses/warehouseTypes' },
        { title: props.code, href: `/warehouses/warehouseTypes/${props.code}` },
        { title: 'Edit', href: '#' },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            details: '',
            orgUID: '',

            orgName: ''
        },
    })

    // fetch data
    const { data, loading, error } = useWarehouseTypeQuery(
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
                name: data.warehouseType.name!,
                details: data.warehouseType.details,
                orgUID: data.warehouseType.organization?.uid,
                orgName: data.warehouseType.organization?.name!
            }
           
        )
        
        setFormData(true)
    }

    const handleOrgSelect = (item: Organization) => {
        form.values.orgUID = item.uid!
    }

    const handleSubmit = () => {
        var updateDeptInput: UpdateWarehouseType = {
            name: form.values.name,
            details: form.values.details,
            orgUID: form.values.orgUID,
        }

        updateDept({
            variables: {id: data?.warehouseType.id!, input: updateDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `WarehouseType ${res.data.warehouseTypeUpdate.code} Updated`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/warehouses/warehouseTypes/${res.data.warehouseTypeUpdate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push(`/warehouses/warehouseTypes/${props.code}`)
    }

    return (
        <Page navTrails={navTrails}>
        <PageHeader title='Edit WarehouseType' />
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
