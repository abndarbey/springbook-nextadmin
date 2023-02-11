import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import MarketOrderEdit from 'modules/procurements/market-orders/MarketOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Market Order Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <MarketOrderEdit title={title} code={code} />
        </Fragment>
    )
}
