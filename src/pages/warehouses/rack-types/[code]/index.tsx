import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
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
            <PageTitle title={title} />
            <RackTypeDetails title={title} code={query.code} />
        </Fragment>
    )
}
