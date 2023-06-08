import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import STODetails from 'modules/sales/stock-transfer-orders/STODetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Stock Transfer Order Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <STODetails title={title} code={code} />
        </Fragment>
    )
}
