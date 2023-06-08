import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import RTEdit from 'modules/warehouses/rackType/RTEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <NextHead title='Edit RT' />
            <RTEdit code={query.code} />
        </Fragment>
    )
}
