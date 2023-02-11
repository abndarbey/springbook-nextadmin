import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import RackEdit from 'modules/warehouses/rack/RackEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <PageTitle title='Edit PT' />
            <RackEdit code={query.code} />
        </Fragment>
    )
}
