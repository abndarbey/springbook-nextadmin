import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import SkuNew from 'modules/catalogues/skus/SkuNew'

export default function New() {
    const title: string = 'New SKU'

    return (
        <Fragment>
            <NextHead title={title} />
            <SkuNew title={title} />
        </Fragment>
    )
}
