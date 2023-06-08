import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import STOList from 'modules/shipments/outbound/stock-transfer-orders/STOList'

export default function STOs() {
    const title: string = 'Stock Transfer Orders'

    return (
        <Fragment>
            <NextHead title={title} />
            <STOList title={title} />
        </Fragment>
    )
}
