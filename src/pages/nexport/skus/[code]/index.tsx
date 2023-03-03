import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import SkuDetails from 'modules/nexport/skus/SkuDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string ='SKU Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuDetails title={title} code={query.code} />
        </Fragment>
    )
}
