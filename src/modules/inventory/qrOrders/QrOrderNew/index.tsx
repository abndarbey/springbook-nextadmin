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
} from 'gql/generated/hooks'

import { getObjectFromLocalStorage } from 'common/localStorage'
import PageLoader from 'components/PageLoader'
import QrOrderNewHTML from './QrOrderNewHTML'
import { PageProps } from 'types/types'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgID: Yup.string().min(2, 'Invalid org ID'),
})

export default function QrOrderNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useQrOrderCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            objectType: undefined,
            skuID: "",
            batchID: "",
            warehouseID: "",
            orgID: "",
            quantity: 0,
            weight: 0,
            
            skuLocalID: "",
            skuName: "",
            batchNumber: "",
            warehouseName: "",
            orgName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgID(obj.id)
        if (obj.id != "" && obj.name) {
            form.values.orgID = obj.id!
            form.values.orgName = obj.name!
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
            form.setValues({ orgID: authData.data.auther.orgID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgID = item.id!
            form.values.orgName = item.name!
        }
    }
    const handleSkuSelect = (item: Sku | undefined) => {
        if (item) {
            form.values.skuID = item?.gid!
            form.values.skuName = item?.name!
            form.values.skuLocalID = item?.id!
        }
    }
    const handleBatchSelect = (item: Batch | undefined) => {
        if (item) {
            form.values.batchID = item?.gid!
            form.values.batchNumber = item?.batchNumber!
        }
    }
    const handleWarehouseSelect = (item: Warehouse | undefined) => {
        if (item) {
            form.values.warehouseID = item?.id!
            form.values.warehouseName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateQrOrder = {
            objectType: form.values.objectType,
            skuID: form.values.skuID,
            batchID: form.values.batchID,
            warehouseID: form.values.warehouseID,
            quantity: form.values.quantity,
            weight: form.values.weight,
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
            orgID={orgID}
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
