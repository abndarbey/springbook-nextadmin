import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import SalesOrderList from 'modules/orders/sales-orders/SalesOrderList'
import { ViewOption } from 'gql/generated/hooks'

export default function SalesOrders() {
    const title: string = 'Sales Orders'
    const view: ViewOption = ViewOption.Seller

    return (
        <Fragment>
            <NextHead title={title} />
            <SalesOrderList title={title} view={view} />
        </Fragment>
    )
}
