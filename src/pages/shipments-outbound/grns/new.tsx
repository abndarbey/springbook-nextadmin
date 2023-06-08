import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import GRNNew from 'modules/shipments/outbound/grns//GRNNew'

export default function New() {
    const title: string = 'New GRN'

    return (
        <Fragment>
            <NextHead title={title} />
            <GRNNew title={title} />
        </Fragment>
    )
}
