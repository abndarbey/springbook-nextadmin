import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import RackDetails from 'modules/warehouses/rack/RackDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='RackType Details' />
            <RackDetails code={query.code} />
        </Fragment>
    )
}
