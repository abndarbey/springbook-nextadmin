import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PurchaseOrderList from 'modules/procurements/purchase-orders/PurchaseOrderList'

export default function PurchaseOrders() {
    const title: string = 'Purchase Orders'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PurchaseOrderList title={title} />
        </Fragment>
    )
}
