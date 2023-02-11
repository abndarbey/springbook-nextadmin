import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import WCDetails from 'modules/contracts/client/warehouse-contracts/WCDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const title: string = 'Warehouse Contract Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <WCDetails code={query.code} title={title} />
        </Fragment>
    )
}
