import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import SalesOrderNew from 'modules/sales/sales-orders/SalesOrderNew'

export default function New() {
    const title: string = 'New Sales Order'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SalesOrderNew title={title} />
        </Fragment>
    )
}
