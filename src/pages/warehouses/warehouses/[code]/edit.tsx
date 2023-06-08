import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import WarehouseEdit from 'modules/warehouses/warehouse/WarehouseEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <NextHead title='Edit WT' />
            <WarehouseEdit code={query.code} />
        </Fragment>
    )
}
