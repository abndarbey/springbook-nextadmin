import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { Textarea, TextInput } from '@mantine/core'
import {
    useAutherQuery,
    useWarehouseContractCreateMutation,
    UpdateWarehouseContract,
    Organization,
    Warehouse,
    Contact,
} from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { Fragment, useEffect, useState } from 'react'
import { PageProps } from 'types/types'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'
import ContactSelectModal from 'common/select-table/ContactSelectModal'
import PageLoader from 'components/PageLoader'
import { getObjectFromLocalStorage } from 'common/localStorage'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Warehouse Contracts', href: '/contracts/contractor/warehouse-contracts' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgID: Yup.string().min(2, 'Invalid org ID'),
})

export default function WarehouseContractNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useWarehouseContractCreateMutation({})
    const [contractorModalOpened, setContractorModalOpened] = useState(false)
    const [clientModalOpened, setClientModalOpened] = useState(false)
    const [whModalOpened, setWHModalOpened] = useState(false)
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            contractorID: '',
            clientID: '',
            warehouseID: '',
            message: '',

            contractorName: '',
            clientName: '',
            whCode: '',    
        },
    })

    // get org id from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgID(obj.id)
        if (obj.id != "" && obj.name) {
            form.values.contractorID = obj.id!
            form.values.contractorName = obj.name!
        }
    }, [orgID, form])

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
            form.setValues({ contractorID: authData.data.auther.orgID })
        }
        setAutherLoaded(true)
    }

    // action functions
    const handleContractorSelect = (item: Organization| undefined) => {
        if (item) {
            form.values.contractorID = item.id!
            form.values.contractorName = item.name!
        }
    }
    const handleClientSelect = (item: Contact | undefined) => {
        if (item) {
            form.values.clientID = item.companyID!
            form.values.clientName = item.name!
        }
    }
    const handleWarehouseSelect = (item: Warehouse | undefined) => {
        if (item) {
            form.values.warehouseID = item?.id!
            form.values.whCode = item?.code!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateWarehouseContract = {
            contractorID: form.values.contractorID,
            clientID: form.values.clientID,
            warehouseID: form.values.warehouseID,
            message: form.values.message,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Warehouse Contracts ${res.data.warehouseContractCreate.code} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/contracts/contractor/warehouse-contracts/${res.data.warehouseContractCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/contracts/contractor/warehouse-contracts')
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
                {authData.data?.auther.isAdmin && orgID == "" &&
                    <Fragment>
                        <OrgSelectModal
                            opened={contractorModalOpened}
                            setOpened={setContractorModalOpened}
                            handleSelect={handleContractorSelect}
                        />
                        <TextInput
                            label="Contractor"
                            mb="md"
                            placeholder="Select Contractor"
                            name="organization"
                            onClick={() => setContractorModalOpened(true)}
                            {...form.getInputProps('contractorName')}
                        />
                    </Fragment>
                }

                {/* Select Client */}
                {form.values.contractorID != "" &&
                    <ContactSelectModal
                        opened={clientModalOpened}
                        setOpened={setClientModalOpened}
                        handleSelect={handleClientSelect}
                        organizationID={form.values.contractorID}
                    />
                }
                <TextInput
                    label="Client"
                    placeholder="Select Client"
                    name="client"
                    mb="md"
                    disabled={form.values.contractorID != "" ? false : true}
                    onClick={() => setClientModalOpened(true)}
                    {...form.getInputProps('clientName')}
                />

                {/* Select Warehouse */}
                {form.values.contractorID != "" &&
                    <WarehouseSelectModal
                        opened={whModalOpened}
                        setOpened={setWHModalOpened}
                        handleSelect={handleWarehouseSelect}
                        organizationID={form.values.contractorID}
                    />
                }
                <TextInput
                    label="Warehouse"
                    placeholder="Select Warehouse"
                    name="warhouse"
                    mb="md"
                    disabled={form.values.contractorID != "" ? false : true}
                    onClick={() => setWHModalOpened(true)}
                    {...form.getInputProps('whCode')}
                />
                <Textarea
                    label="Message"
                    placeholder="Message"
                    mb="md"
                    name="message"
                    {...form.getInputProps('message')}
                />
            </FormCard>
        </Page>
    )
}
