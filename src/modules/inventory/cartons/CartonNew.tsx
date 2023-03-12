import { Fragment, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import { useForm, yupResolver } from '@mantine/form'
import { Checkbox, TextInput } from '@mantine/core'
import { useCartonCreateMutation, UpdateCarton, Carton, Sku, Batch, Organization, useAutherQuery, Warehouse, ThirdPartyWarehouse } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import SkuSelectModal from 'common/select-table/SkuSelectModal'
import BatchSelectModal from 'common/select-table/BatchSelectModal'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'
import ThirdPartyWhSelectModal from 'common/select-table/ThirdPartyWhSelectModal'
import { getOrgFromLocalStorage } from 'common/readLocalStorage'
import PageLoader from 'components/PageLoader'
import { from } from '@apollo/client'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Cartons', href: '/inventory/cartons' },
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
    const [newObj] = useCartonCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [skuModalOpened, setSkuModalOpened] = useState(false)
    const [batchModalOpened, setBatchModalOpened] = useState(false)
    const [warehouseModalOpened, setWarehouseModalOpened] = useState(false)
    const [thirdPartyWhModalOpened, setThirdPartyWhModalOpened] = useState(false)
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            isManagement: false,
            skuUID: "",
            batchUID: "",
            warehouseUID: "",
            ownerUID: "",
            isThirdParty: false,
            quantity: 0,

            skuID: "",
            skuName: "",
            batchNumber: "",
            warehouseName: "",
            ownerName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const orgObj = getOrgFromLocalStorage()
        setOrgUID(orgObj.uid)
        if (orgObj.uid != "" && orgObj.name) {
            form.values.ownerUID = orgObj.uid!
            form.values.ownerName = orgObj.name!
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
            form.setValues({ ownerUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.ownerUID = item.uid!
            form.values.ownerName = item.name!
        }
    }
    const handleSkuSelect = (item: Sku | undefined) => {
        if (item) {
            form.values.skuUID = item?.uid!
            form.values.skuName = item?.name!
            form.values.skuID = item?.id!
        }
    }
    const handleBatchSelect = (item: Batch | undefined) => {
        if (item) {
            form.values.batchUID = item?.uid!
            form.values.batchNumber = item?.batchNumber!
        }
    }
    const handleWarehouseSelect = (item: Warehouse | undefined) => {
        if (item) {
            form.values.warehouseUID = item?.uid!
            form.values.warehouseName = item?.name!
        }
    }
    const handleThirdPartyWhSelect = (item: ThirdPartyWarehouse | undefined) => {
        if (item) {
            form.values.warehouseUID = item?.warehouseUID!
            form.values.warehouseName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateCarton = {
            skuUID: form.values.skuUID,
            batchUID: form.values.batchUID,
            warehouseUID: form.values.warehouseUID,
            quantity: form.values.quantity,
            ownerUID: form.values.ownerUID,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Cartons Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/inventory/cartons')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/inventory/cartons')
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
                            {...form.getInputProps('ownerName')}
                        />
                    </Fragment>
                }

                {form.values.ownerUID != "" &&
                    <SkuSelectModal
                        opened={skuModalOpened}
                        setOpened={setSkuModalOpened}
                        handleSelect={handleSkuSelect}
                        organizationUID={form.values.ownerUID}
                    />
                }
                <TextInput
                    label="SKU"
                    mb="md"
                    placeholder="Select SKU"
                    disabled={form.values.ownerUID != "" ? false : true}
                    onClick={() => setSkuModalOpened(true)}
                    {...form.getInputProps("skuName")}
                />

                {form.values.ownerUID != "" && form.values.skuUID != "" &&
                    <BatchSelectModal
                        opened={batchModalOpened}
                        setOpened={setBatchModalOpened}
                        handleSelect={handleBatchSelect}
                        organizationUID={form.values.ownerUID}
                        skuID={form.values.skuID}
                    />
                }
                <TextInput
                    label="Batch"
                    mb="md"
                    placeholder="Select Batch"
                    disabled={(form.values.ownerUID != "" && form.values.skuUID != "") ? false : true}
                    onClick={() => setBatchModalOpened(true)}
                    {...form.getInputProps("batchNumber")}
                />
                <Checkbox
                    label="Is Third Party Warehouse"
                    mb="md"
                    {...form.getInputProps("isThirdParty")}
                />

                {form.values.ownerUID != "" && !form.values.isThirdParty &&
                    <WarehouseSelectModal
                        opened={warehouseModalOpened}
                        setOpened={setWarehouseModalOpened}
                        handleSelect={handleWarehouseSelect}
                        organizationUID={form.values.ownerUID}
                    />
                }
                {!form.values.isThirdParty &&
                    <TextInput
                        label="Warehouse"
                        mb="md"
                        placeholder="Select Warehouse"
                        disabled={form.values.ownerUID != "" ? false : true}
                        onClick={() => setWarehouseModalOpened(true)}
                        {...form.getInputProps("warehouseName")}
                    />
                }

                {form.values.ownerUID != "" && form.values.isThirdParty &&
                    <ThirdPartyWhSelectModal
                        opened={thirdPartyWhModalOpened}
                        setOpened={setThirdPartyWhModalOpened}
                        handleSelect={handleThirdPartyWhSelect}
                        organizationUID={form.values.ownerUID}
                    />
                }
                {form.values.isThirdParty &&
                    <TextInput
                        label="Third Party Warehouse"
                        mb="md"
                        placeholder="Select Third Party Warehouse"
                        disabled={form.values.ownerUID != "" ? false : true}
                        onClick={() => setThirdPartyWhModalOpened(true)}
                        {...form.getInputProps("warehouseName")}
                    />
                }

                <TextInput
                    label="Quantity"
                    type="number"
                    placeholder="Quantity"
                    mb="md"
                    name="quantity"
                    {...form.getInputProps('quantity')}
                />
            </FormCard>
        </Page>
    )
}
