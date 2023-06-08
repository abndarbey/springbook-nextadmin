import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PurchaseOrderList from 'modules/orders/purchase-orders/PurchaseOrderList'
import { ViewOption } from 'gql/generated/hooks'

export default function PurchaseOrders() {
    const title: string = 'Purchase Orders'
    const view: ViewOption = ViewOption.Seller

    return (
        <Fragment>
            <NextHead title={title} />
            <PurchaseOrderList title={title} view={view} />
        </Fragment>
    )
}
