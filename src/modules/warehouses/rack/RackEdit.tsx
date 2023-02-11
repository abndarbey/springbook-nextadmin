import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { SimpleGrid, TextInput } from '@mantine/core'
import { useRackUpdateMutation, UpdateRack, Organization, useRackQuery, Warehouse, RackType } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import PageLoader from 'components/PageLoader'
import RackTypeSelectModal from 'common/select-table/RTSelectModal'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface IRackEditProps {
    code?: any
}

export default function RackEdit(props: IRackEditProps) {
    const router = useRouter()
    const [updateDept] = useRackUpdateMutation({})
    const [formData, setFormData] = useState(false)
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [rtModalOpened, setRTModalOpened] = useState(false)
    const [whModalOpened, setWHModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Racks', href: '/warehouses/racks' },
        { title: props.code, href: `/warehouses/racks/${props.code}` },
        { title: 'Edit', href: '#' },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: '',
            typeID: '',
            warehouseUID: '',
            rows: 0,
            columns: 0,

            orgName: '',
            rtCode: '',
            whCode: '',
        },
    })

    // fetch data
    const { data, loading, error } = useRackQuery(
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
                orgUID: data.rack.organization?.uid,
                orgName: data.rack.organization?.name!,
                typeID: data.rack.type?.id!,
                rtCode: data.rack.type?.code!,
                warehouseUID: data.rack.warehouse?.uid!,
                whCode: data.rack.warehouse?.code!,
                rows: data.rack.rows!,
                columns: data.rack.columns!
            }
        )
        setFormData(true)
    }

    const handleOrgSelect = (item: Organization) => {
        form.values.orgUID = item.uid!
        form.values.orgName = item.name!
    }
        
    const handleRTSelect = (item: RackType | undefined) => {
        if (item) {
            form.values.typeID = item.id!
            form.values.rtCode = item.code!
        }
    }
    const handleWarehouseSelect = (item: Warehouse | undefined) => {
        if (item) {
            form.values.warehouseUID = item.uid!
            form.values.whCode = item.code!
        }
    }

    const handleSubmit = () => {
        var updateDeptInput: UpdateRack = {
            orgUID: form.values.orgUID,
            warehouseUID: form.values.warehouseUID,
            typeID: form.values.typeID,
            rows: form.values.rows,
            columns: form.values.columns
        }

        updateDept({
            variables: {id: data?.rack.id!, input: updateDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Rack ${res.data.rackUpdate.code} Updated`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/warehouses/racks/${res.data.rackUpdate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push(`/warehouses/racks/${props.code}`)
    }

    return (
        <Page navTrails={navTrails}>
        <PageHeader title='Edit Rack' />
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
                onClick={() => setOrgModalOpened(true)}
                {...form.getInputProps('orgName')}
            />
            {form.values.orgUID != "" &&
                <RackTypeSelectModal
                    opened={rtModalOpened}
                    setOpened={setRTModalOpened}
                    handleSelect={handleRTSelect}
                    organizationUID={form.values.orgUID}
                />
            }
            <TextInput
                label="Type"
                placeholder="Select Type"
                mt="md"
                disabled={form.values.orgUID != "" ? false : true}
                onClick={() => setRTModalOpened(true)}
                {...form.getInputProps('rtCode')}
            />
            {form.values.orgUID != "" &&
                <WarehouseSelectModal
                    opened={whModalOpened}
                    setOpened={setWHModalOpened}
                    handleSelect={handleWarehouseSelect}
                    organizationUID={form.values.orgUID}
                />
            }
            <TextInput
                label=" Warehouse"
                placeholder="Select Warehouse"
                mt="md"
                disabled={form.values.orgUID != "" ? false : true}
                onClick={() => setWHModalOpened(true)}
                {...form.getInputProps('whCode')}
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput
                    label="Rows"
                    placeholder="Enter no. of Rows"
                    type="number"
                    mt="md"
                    name="rows"
                    {...form.getInputProps('rows')}
                />
                <TextInput
                    label="Columns"
                    placeholder="Enter no. of Columns"
                    type="number"
                    mt="md"
                    name="columns"
                    {...form.getInputProps('columns')}
                />
            </SimpleGrid>
        </FormCard>
    </Page>
    )
}
