import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ASNList from 'modules/shipments/inbound/asns/ASNList'

export default function ASNs() {
    const title: string = 'ASNs'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ASNList title={title} />
        </Fragment>
    )
}
