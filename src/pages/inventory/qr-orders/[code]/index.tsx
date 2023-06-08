import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
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
            <NextHead title={title} />
            <QrOrderDetails title={title} code={query.code} />
        </Fragment>
    )
}
