import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import RTEdit from 'modules/warehouses/rackType/RTEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <PageTitle title='Edit RT' />
            <RTEdit code={query.code} />
        </Fragment>
    )
}
