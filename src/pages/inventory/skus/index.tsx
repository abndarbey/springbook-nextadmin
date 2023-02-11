import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import SkuList from 'modules/inventory/skus/SkuList'

export default function Skus() {
    const title: string = 'SKUs'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuList title={title} />
        </Fragment>
    )
}
