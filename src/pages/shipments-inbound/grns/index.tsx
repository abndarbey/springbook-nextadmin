import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import GRNList from 'modules/shipments/inbound/grns//GRNList'

export default function GRNs() {
    const title: string = 'GRNs'

    return (
        <Fragment>
            <NextHead title={title} />
            <GRNList title={title} />
        </Fragment>
    )
}
