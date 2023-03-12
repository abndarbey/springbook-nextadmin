import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { useForm, yupResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import {
    useCartonCreateMutation,
    UpdateCarton,
    Sku,
    Batch,
    Organization,
    useAutherQuery,
    Warehouse,
    ThirdPartyWarehouse,
} from '@lib/generated/hooks'

import { getOrgFromLocalStorage } from 'common/readLocalStorage'
import PageLoader from 'components/PageLoader'
import CartonsNewHTML from './CartonsNewHTML'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface ICartonPageProps {
    title: string
}

export default function CartonsNew(props: ICartonPageProps) {
    const router = useRouter()
    const [newObj] = useCartonCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
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
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `${form.values.quantity} Cartons Created`,
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
        <CartonsNewHTML
            title={props.title}
            auther={authData.data?.auther!}
            orgUID={orgUID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleSkuSelect={handleSkuSelect}
            handleBatchSelect={handleBatchSelect}
            handleWarehouseSelect={handleWarehouseSelect}
            handleThirdPartyWhSelect={handleThirdPartyWhSelect}
        />
    )
}
