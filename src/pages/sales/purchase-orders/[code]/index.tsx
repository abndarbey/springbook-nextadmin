import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PurchaseOrderDetails from 'modules/orders/purchase-orders/PurchaseOrderDetails'
import { ViewOption } from 'gql/generated/hooks'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Purchase Order Details'
    const view: ViewOption = ViewOption.Seller
    
    return (
        <Fragment>
            <NextHead title={title} />
            <PurchaseOrderDetails title={title} code={code} view={view} />
        </Fragment>
    )
}
