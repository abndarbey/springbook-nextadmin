import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import STONew from 'modules/shipments/outbound/stock-transfer-orders/STONew'

export default function New() {
    const title: string = 'New Stock Transfer Order'

    return (
        <Fragment>
            <PageTitle title={title} />
            <STONew title={title} />
        </Fragment>
    )
}
