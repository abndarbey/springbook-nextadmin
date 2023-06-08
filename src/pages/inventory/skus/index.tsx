import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import SkuList from 'modules/inventory/skus/SkuList'

export default function Skus() {
    const title: string = 'SKUs'

    return (
        <Fragment>
            <NextHead title={title} />
            <SkuList title={title} />
        </Fragment>
    )
}
