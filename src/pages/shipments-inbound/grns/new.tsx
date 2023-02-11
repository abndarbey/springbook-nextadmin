import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import GRNNew from 'modules/shipments/inbound/grns//GRNNew'

export default function New() {
    const title: string = 'New GRN'

    return (
        <Fragment>
            <PageTitle title={title} />
            <GRNNew title={title} />
        </Fragment>
    )
}
