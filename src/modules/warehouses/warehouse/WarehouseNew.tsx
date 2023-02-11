import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput, Select, Textarea, SimpleGrid } from '@mantine/core'
import { useWarehouseCreateMutation, UpdateWarehouse, Organization, WarehouseType } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgDropdownSelect from 'common/dropSelect/OrgDropdownSelect'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import WarehouseTypeSelectModal from 'common/select-table/WTSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Warehousess', href: '/warehouses/warehouses' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function WarehousesNew() {
    const router = useRouter()
    const [newDept] = useWarehouseCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [wtModalOpened, setWTModalOpened] = useState(false)
    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            orgUID: '',
            typeID: '',
           
            orgName: '',
            typeName: '',    
        },
    })

    const handleOrgSelect = (item: Organization) => {
        form.values.orgUID = item.uid!
        form.values.orgName = item.name!
    }
    
    const handleWTSelect = (item: WarehouseType | undefined) => {
        if (item) {
            form.values.typeID = item?.id!
            form.values.typeName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newDeptInput: UpdateWarehouse = {
            name: form.values.name,
            orgUID: form.values.orgUID,
        }

        newDept({
            variables: {input: newDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Warehouses ${res.data.warehouseCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/warehouses/warehouses')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/warehouses/warehouses')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New Warehouses' />
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
                    <WarehouseTypeSelectModal
                        opened={wtModalOpened}
                        setOpened={setWTModalOpened}
                        handleSelect={handleWTSelect}
                        organizationUID={form.values.orgUID}
                    />
                }
                <TextInput
                    label="Type"
                    placeholder="Select Type"
                    mt="md"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setWTModalOpened(true)}
                    {...form.getInputProps('typeName')}
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
