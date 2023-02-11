import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PalletDetails from 'modules/warehouses/pallet/PalletDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='Pallet Details' />
            <PalletDetails code={query.code} />
        </Fragment>
    )
}
