import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import GRNList from 'modules/shipments/outbound/grns//GRNList'

export default function GRNs() {
    const title: string = 'GRNs'

    return (
        <Fragment>
            <PageTitle title={title} />
            <GRNList title={title} />
        </Fragment>
    )
}
