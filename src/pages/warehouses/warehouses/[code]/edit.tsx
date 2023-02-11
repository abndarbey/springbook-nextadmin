import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import WarehouseEdit from 'modules/warehouses/warehouse/WarehouseEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <PageTitle title='Edit WT' />
            <WarehouseEdit code={query.code} />
        </Fragment>
    )
}
