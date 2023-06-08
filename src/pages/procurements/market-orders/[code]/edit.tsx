import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import MarketOrderEdit from 'modules/procurements/market-orders/MarketOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Market Order Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <MarketOrderEdit title={title} code={code} />
        </Fragment>
    )
}
