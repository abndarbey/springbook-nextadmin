import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import CellDetails from 'modules/warehouses/cell/CellDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='Cell Details' />
            <CellDetails code={query.code} />
        </Fragment>
    )
}
