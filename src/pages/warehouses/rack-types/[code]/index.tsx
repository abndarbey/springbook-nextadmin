import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import RackTypeDetails from 'modules/warehouses/rackType/RTDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Rack Type Details"
    
    return (
        <Fragment>
            <NextHead title={title} />
            <RackTypeDetails title={title} code={query.code} />
        </Fragment>
    )
}
