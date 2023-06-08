import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PurchaseOrderNew from 'modules/sales/purchase-orders/PurchaseOrderNew'

export default function New() {
    const title: string = 'New Purchase Order'

    return (
        <Fragment>
            <NextHead title={title} />
            <PurchaseOrderNew title={title} />
        </Fragment>
    )
}
