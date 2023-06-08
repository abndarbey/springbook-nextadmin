import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import SalesOrderDetails from 'modules/sales/sales-orders/SalesOrderDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Sales Order Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <SalesOrderDetails title={title} code={code} />
        </Fragment>
    )
}
