import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import CartonEdit from 'modules/inventory/cartons/CartonEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = 'Carton Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <CartonEdit title={title} code={query.code} />
        </Fragment>
    )
}
