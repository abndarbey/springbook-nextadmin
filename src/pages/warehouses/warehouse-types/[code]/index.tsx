import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import WarehouseTypeDetails from 'modules/warehouses/warehouseType/WTDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='WarehouseType Details' />
            <WarehouseTypeDetails code={query.code} />
        </Fragment>
    )
}
