import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import BatchDetails from 'modules/inventory/batches/BatchDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string ='Batch Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <BatchDetails title={title} code={query.code} />
        </Fragment>
    )
}
