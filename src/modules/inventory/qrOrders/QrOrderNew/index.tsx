import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { useForm, yupResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import {
    useQrOrderCreateMutation,
    UpdateQrOrder,
    Sku,
    Batch,
    Organization,
    useAutherQuery,
    Warehouse,
} from '@lib/generated/hooks'

import { getObjectFromLocalStorage } from 'common/localStorage'
import PageLoader from 'components/PageLoader'
import QrOrderNewHTML from './QrOrderNewHTML'
import { PageProps } from 'types/types'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function QrOrderNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useQrOrderCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            objectType: undefined,
            skuUID: null,
            batchUID: null,
            warehouseUID: "",
            orgUID: "",
            quantity: 0,

            skuID: "",
            skuName: "",
            batchNumber: "",
            warehouseName: "",
            orgName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgUID(obj.uid)
        if (obj.uid != "" && obj.name) {
            form.values.orgUID = obj.uid!
            form.values.orgName = obj.name!
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
            form.setValues({ orgUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
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

    const handleSubmit = () => {
        var newObjInput: UpdateQrOrder = {
            objectType: form.values.objectType,
            skuUID: form.values.skuUID,
            batchUID: form.values.batchUID,
            warehouseUID: form.values.warehouseUID,
            quantity: form.values.quantity,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `QR Order Created`,
            })
            router.push(`/inventory/qr-orders/${res.data.qrOrderCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/inventory/qr-orders')
    }

    return (
        <QrOrderNewHTML
            title={props.title!}
            auther={authData.data?.auther!}
            orgUID={orgUID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleSkuSelect={handleSkuSelect}
            handleBatchSelect={handleBatchSelect}
            handleWarehouseSelect={handleWarehouseSelect}
        />
    )
}
