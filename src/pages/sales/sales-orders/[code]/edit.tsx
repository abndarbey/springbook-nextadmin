import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import SalesOrderEdit from 'modules/sales/sales-orders/SalesOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Sales Order Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SalesOrderEdit title={title} code={code} />
        </Fragment>
    )
}
