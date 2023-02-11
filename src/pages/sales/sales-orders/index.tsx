import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import SalesOrderList from 'modules/sales/sales-orders/SalesOrderList'

export default function SalesOrders() {
    const title: string = 'Sales Orders'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SalesOrderList title={title} />
        </Fragment>
    )
}
