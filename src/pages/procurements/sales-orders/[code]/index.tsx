import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import SalesOrderDetails from 'modules/orders/sales-orders/SalesOrderDetails'
import { ViewOption } from 'gql/generated/hooks'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = 'Sales Order Details'
    const view: ViewOption = ViewOption.Buyer
    
    return (
        <Fragment>
            <NextHead title={title} />
            <SalesOrderDetails title={title} code={query.code} view={view} />
        </Fragment>
    )
}
