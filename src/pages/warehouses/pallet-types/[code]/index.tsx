import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PalletTypeDetails from 'modules/warehouses/palletType/PTDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='PalletType Details' />
            <PalletTypeDetails code={query.code} />
        </Fragment>
    )
}
