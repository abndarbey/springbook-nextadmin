import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import MarketOrderDetails from 'modules/sales/market-orders/MarketOrderList'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Market Order Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <MarketOrderDetails title={title} code={code} />
        </Fragment>
    )
}
