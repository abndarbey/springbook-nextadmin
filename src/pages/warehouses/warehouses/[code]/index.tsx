import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import WarehouseDetails from 'modules/warehouses/warehouse/WarehouseDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='WarehouseType Details' />
            <WarehouseDetails code={query.code} />
        </Fragment>
    )
}
