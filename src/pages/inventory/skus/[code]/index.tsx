import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import SkuDetails from 'modules/inventory/skus/SkuDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string ='SKU Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <SkuDetails title={title} code={query.code} />
        </Fragment>
    )
}
