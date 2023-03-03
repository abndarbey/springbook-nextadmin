import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import SkuEdit from 'modules/catalogues/skus/SkuEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string ='SKU Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuEdit title={title} code={query.code} />
        </Fragment>
    )
}
