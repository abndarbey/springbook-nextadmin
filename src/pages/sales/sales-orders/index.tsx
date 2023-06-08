import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import SalesOrderList from 'modules/sales/sales-orders/SalesOrderList'

export default function SalesOrders() {
    const title: string = 'Sales Orders'

    return (
        <Fragment>
            <NextHead title={title} />
            <SalesOrderList title={title} />
        </Fragment>
    )
}
