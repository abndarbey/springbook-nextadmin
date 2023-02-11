import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import SalesOrderDetails from 'modules/sales/sales-orders/SalesOrderDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Sales Order Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <SalesOrderDetails title={title} code={code} />
        </Fragment>
    )
}
