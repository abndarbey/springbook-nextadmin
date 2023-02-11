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
    
    return (
        <Fragment>
            <PageTitle title='RackType Details' />
            <RackTypeDetails code={query.code} />
        </Fragment>
    )
}
