import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import STODetails from 'modules/shipments/outbound/stock-transfer-orders/STODetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Stock Transfer Order Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <STODetails title={title} code={code} />
        </Fragment>
    )
}
