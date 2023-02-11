import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import SkuNew from 'modules/catalogues/skus/SkuNew'

export default function New() {
    const title: string = 'New SKU'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuNew title={title} />
        </Fragment>
    )
}
