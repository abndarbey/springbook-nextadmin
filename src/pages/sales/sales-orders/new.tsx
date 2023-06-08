import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import SalesOrderNew from 'modules/sales/sales-orders/SalesOrderNew'

export default function New() {
    const title: string = 'New Sales Order'

    return (
        <Fragment>
            <NextHead title={title} />
            <SalesOrderNew title={title} />
        </Fragment>
    )
}
