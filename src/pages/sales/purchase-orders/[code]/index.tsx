import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PurchaseOrderDetails from 'modules/sales/purchase-orders/PurchaseOrderList'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Purchase Order Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <PurchaseOrderDetails title={title} code={code} />
        </Fragment>
    )
}
