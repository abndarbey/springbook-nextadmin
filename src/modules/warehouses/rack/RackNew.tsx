import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput, SimpleGrid } from '@mantine/core'
import { useRackCreateMutation, UpdateRack, Organization, RackType, Warehouse } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import RackTypeSelectModal from 'common/select-table/RTSelectModal'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Racks', href: '/warehouses/racks' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function RacksNew() {
    const router = useRouter()
    const [newRT] = useRackCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [rtModalOpened, setRTModalOpened] = useState(false)
    const [whModalOpened, setWHModalOpened] = useState(false)
    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: '',
            typeID: '',
            warehouseUID: '',
            rows: '',
            columns: '',

            orgName: '',
            rtCode: '',
            whCode: '',
        },
    })

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
        var newRTInput: UpdateRack = {
            orgUID: form.values.orgUID,
            typeID: form.values.typeID,
            warehouseUID: form.values.warehouseUID,
            rows: form.values.rows,
            columns: form.values.columns
        }
        newRT({
            variables: {input: newRTInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Racks ${res.data.rackCreate.code} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/warehouses/racks')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/warehouses/racks')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New Racks' />
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
