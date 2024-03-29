import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import WTEdit from 'modules/warehouses/warehouseType/WTEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <NextHead title='Edit WT' />
            <WTEdit code={query.code} />
        </Fragment>
    )
}
