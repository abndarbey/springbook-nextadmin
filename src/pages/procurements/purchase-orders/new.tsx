import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PurchaseOrderNew from 'modules/orders/purchase-orders/PurchaseOrderNew'

export default function New() {
    const title: string = 'New Purchase Order'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PurchaseOrderNew title={title} />
        </Fragment>
    )
}
