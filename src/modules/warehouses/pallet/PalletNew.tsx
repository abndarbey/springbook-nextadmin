import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput, Select, Textarea, SimpleGrid } from '@mantine/core'
import { usePalletCreateMutation, UpdatePallet, Organization, PalletType, Warehouse, UpdateWarehouse } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgDropdownSelect from 'common/dropSelect/OrgDropdownSelect'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import PalletTypeSelectModal from 'common/select-table/PTSelectModal'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Palletss', href: '/warehouses/pallets' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function PalletsNew() {
    const router = useRouter()
    const [newPT] = usePalletCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [ptModalOpened, setPTModalOpened] = useState(false)
    const [whModalOpened, setWHModalOpened] = useState(false)
    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgUID: '',
            typeID: '',
            warehouseUID: '',


            orgName: '',
            ptCode: '',
            whCode: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        form.values.orgUID = item.uid!
        form.values.orgName = item.name!
    }
    
    const handlePTSelect = (item: PalletType | undefined) => {
        if (item) {
            form.values.typeID = item.id!
            form.values.ptCode = item.code!
        }
    }
    const handleWarehouseSelect = (item: Warehouse | undefined) => {
        if (item) {
            form.values.warehouseUID = item.uid!
            form.values.whCode = item.code!
        }
    }

    const handleSubmit = () => {
        var newPTInput: UpdatePallet = {
            orgUID: form.values.orgUID,
            typeID: form.values.typeID,
            warehouseUID: form.values.warehouseUID,
        }
       
        newPT({
            variables: {input: newPTInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Pallets ${res.data.palletCreate.code} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/warehouses/pallets')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/warehouses/pallets')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New Pallets' />
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
                    <PalletTypeSelectModal
                        opened={ptModalOpened}
                        setOpened={setPTModalOpened}
                        handleSelect={handlePTSelect}
                        organizationUID={form.values.orgUID}
                    />
                }
                <TextInput
                    label="Type"
                    placeholder="Select Type"
                    mt="md"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setPTModalOpened(true)}
                    {...form.getInputProps('ptCode')}
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
                    label=" Warehouse Type"
                    placeholder="Select Type"
                    mt="md"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setWHModalOpened(true)}
                    {...form.getInputProps('whCode')}
                />           
            </FormCard>
        </Page>
    )
}
