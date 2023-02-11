import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PTEdit from 'modules/warehouses/palletType/PTEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <PageTitle title='Edit PT' />
            <PTEdit code={query.code} />
        </Fragment>
    )
}