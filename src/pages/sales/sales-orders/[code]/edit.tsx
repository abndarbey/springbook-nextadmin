import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import SalesOrderEdit from 'modules/sales/sales-orders/SalesOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Sales Order Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <SalesOrderEdit title={title} code={code} />
        </Fragment>
    )
}
