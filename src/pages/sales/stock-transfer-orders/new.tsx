import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import STONew from 'modules/sales/stock-transfer-orders/STONew'

export default function New() {
    const title: string = 'New Stock Transfer Order'

    return (
        <Fragment>
            <NextHead title={title} />
            <STONew title={title} />
        </Fragment>
    )
}
