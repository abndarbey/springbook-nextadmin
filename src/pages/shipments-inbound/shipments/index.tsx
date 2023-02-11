import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ShipmentList from 'modules/shipments/inbound/shipments/ShipmentList'

export default function Shipments() {
    const title: string = 'Shipments'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ShipmentList title={title} />
        </Fragment>
    )
}
