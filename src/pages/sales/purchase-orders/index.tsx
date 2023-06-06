import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PurchaseOrderList from 'modules/orders/purchase-orders/PurchaseOrderList'
import { ViewOption } from '@lib/generated/hooks'

export default function PurchaseOrders() {
    const title: string = 'Purchase Orders'
    const view: ViewOption = ViewOption.Seller

    return (
        <Fragment>
            <PageTitle title={title} />
            <PurchaseOrderList title={title} view={view} />
        </Fragment>
    )
}
