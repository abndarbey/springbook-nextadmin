import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { Textarea, TextInput } from '@mantine/core'
import { useAutherQuery, useWarehouseContractCreateMutation, UpdateWarehouseContract, Organization, Warehouse, Contact } from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { Fragment, useState } from 'react'
import { PageProps } from 'types/types'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'
import ContactSelectModal from 'common/select-table/ContactSelectModal'
import PageLoader from 'components/PageLoader'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Warehouse Contracts', href: '/contracts/warehouse-contracts' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function WarehouseContractNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useWarehouseContractCreateMutation({})
    const [contractorModalOpened, setContractorModalOpened] = useState(false)
    const [clientModalOpened, setClientModalOpened] = useState(false)
    const [whModalOpened, setWHModalOpened] = useState(false)
    const [autherLoaded, setAutherLoaded] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            contractorUID: '',
            clientUID: '',
            warehouseUID: '',
            message: '',

            contractorName: '',
            clientName: '',
            whCode: '',    
        },
    })

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
            form.setValues({ contractorUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleContractorSelect = (item: Organization| undefined) => {
        if (item) {
            form.values.contractorUID = item.uid!
            form.values.contractorName = item.name!
        }
    }
    
    const handleClientSelect = (item: Contact | undefined) => {
        if (item) {
            form.values.clientUID = item.companyUID!
            form.values.clientName = item.name!
        }
    }

    const handleWarehouseSelect = (item: Warehouse | undefined) => {
        if (item) {
            form.values.warehouseUID = item?.uid!
            form.values.whCode = item?.code!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateWarehouseContract = {
            contractorUID: form.values.contractorUID,
            clientUID: form.values.clientUID,
            warehouseUID: form.values.warehouseUID,
            message: form.values.message,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Warehouse Contracts ${res.data.warehouseContractCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/contracts/warehouse-contracts')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/contracts/warehouse-contracts')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <FormCard
                submitButtonName='Create'
                handleSubmit={form.onSubmit(handleSubmit)}
                handleCancel={handleCancel}
            >
                {/* Select Contractor */}
                {authData.data?.auther.isAdmin &&
                    <Fragment>
                        <OrgSelectModal
                            opened={contractorModalOpened}
                            setOpened={setContractorModalOpened}
                            handleSelect={handleContractorSelect}
                        />
                        <TextInput
                            label="Contractor"
                            placeholder="Select Contractor"
                            name="organization"
                            onClick={() => setContractorModalOpened(true)}
                            {...form.getInputProps('contractorName')}
                        />
                    </Fragment>
                }

                {/* Select Client */}
                {form.values.contractorUID != "" &&
                    <ContactSelectModal
                        opened={clientModalOpened}
                        setOpened={setClientModalOpened}
                        handleSelect={handleClientSelect}
                        organizationUID={form.values.contractorUID}
                    />
                }
                <TextInput
                    label="Client"
                    placeholder="Select Client"
                    name="client"
                    mt="md"
                    disabled={form.values.contractorUID != "" ? false : true}
                    onClick={() => setClientModalOpened(true)}
                    {...form.getInputProps('clientName')}
                />

                {/* Select Warehouse */}
                {form.values.contractorUID != "" &&
                    <WarehouseSelectModal
                        opened={whModalOpened}
                        setOpened={setWHModalOpened}
                        handleSelect={handleWarehouseSelect}
                        organizationUID={form.values.contractorUID}
                    />
                }
                <TextInput
                    label="Warehouse"
                    placeholder="Select Warehouse"
                    name="warhouse"
                    mt="md"
                    disabled={form.values.contractorUID != "" ? false : true}
                    onClick={() => setWHModalOpened(true)}
                    {...form.getInputProps('whCode')}
                />
                <Textarea
                    label="Message"
                    placeholder="Message"
                    mt="md"
                    name="message"
                    {...form.getInputProps('message')}
                />
            </FormCard>
        </Page>
    )
}
