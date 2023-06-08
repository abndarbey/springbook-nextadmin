import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ASNList from 'modules/shipments/inbound/asns/ASNList'

export default function ASNs() {
    const title: string = 'ASNs'

    return (
        <Fragment>
            <NextHead title={title} />
            <ASNList title={title} />
        </Fragment>
    )
}
