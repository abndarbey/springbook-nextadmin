import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import MarketOrderList from 'modules/sales/market-orders/MarketOrderList'

export default function MarketOrders() {
    const title: string = 'Market Orders'

    return (
        <Fragment>
            <PageTitle title={title} />
            <MarketOrderList title={title} />
        </Fragment>
    )
}
