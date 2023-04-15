import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import QrOrderDetails from 'modules/inventory/qrOrders/QrOrderDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string ='QR Order Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <QrOrderDetails title={title} code={query.code} />
        </Fragment>
    )
}
