import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PurchaseOrderDetails from 'modules/orders/purchase-orders/PurchaseOrderDetails'
import { ViewOption } from 'gql/generated/hooks'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = 'Purchase Order Details'
    const view: ViewOption = ViewOption.Seller
    
    return (
        <Fragment>
            <NextHead title={title} />
            <PurchaseOrderDetails title={title} code={query.code} view={view} />
        </Fragment>
    )
}
