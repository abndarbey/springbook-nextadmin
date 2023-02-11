import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ASNNew from 'modules/shipments/inbound/asns/ASNNew'

export default function New() {
    const title: string = 'New ASN'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ASNNew title={title} />
        </Fragment>
    )
}
