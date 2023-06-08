import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import MarketOrderList from 'modules/sales/market-orders/MarketOrderList'

export default function MarketOrders() {
    const title: string = 'Market Orders'

    return (
        <Fragment>
            <NextHead title={title} />
            <MarketOrderList title={title} />
        </Fragment>
    )
}
