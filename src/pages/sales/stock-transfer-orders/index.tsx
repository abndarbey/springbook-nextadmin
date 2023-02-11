import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import STOList from 'modules/sales/stock-transfer-orders/STOList'

export default function STOs() {
    const title: string = 'Stock Transfer Orders'

    return (
        <Fragment>
            <PageTitle title={title} />
            <STOList title={title} />
        </Fragment>
    )
}
