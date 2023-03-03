import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import SkuList from 'modules/nexport/skus/SkuList'

export default function SKUs() {
    const title: string = 'Nexport SKUs'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuList title={title} />
        </Fragment>
    )
}
