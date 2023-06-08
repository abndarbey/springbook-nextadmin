import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import MarketOrderDetails from 'modules/sales/market-orders/MarketOrderList'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Market Order Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <MarketOrderDetails title={title} code={code} />
        </Fragment>
    )
}
