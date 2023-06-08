import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import WCDetails from 'modules/contracts/contractor/warehouse-contracts/WCDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const title: string = 'Warehouse Contract Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <WCDetails code={query.code} title={title} />
        </Fragment>
    )
}
