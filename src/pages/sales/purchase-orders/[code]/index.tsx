import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PurchaseOrderDetails from 'modules/orders/purchase-orders/PurchaseOrderDetails'
import { ViewOption } from 'gql/generated/hooks'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Purchase Order Details'
    const view: ViewOption = ViewOption.Seller
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <PurchaseOrderDetails title={title} code={code} view={view} />
        </Fragment>
    )
}
