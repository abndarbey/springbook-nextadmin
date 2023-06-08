import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ASNNew from 'modules/shipments/inbound/asns/ASNNew'

export default function New() {
    const title: string = 'New ASN'

    return (
        <Fragment>
            <NextHead title={title} />
            <ASNNew title={title} />
        </Fragment>
    )
}
