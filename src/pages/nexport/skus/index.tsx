import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import SkuList from 'modules/nexport/skus/SkuList'

export default function SKUs() {
    const title: string = 'Nexport SKUs'

    return (
        <Fragment>
            <NextHead title={title} />
            <SkuList title={title} />
        </Fragment>
    )
}
