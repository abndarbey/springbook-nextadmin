import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ShipmentNew from 'modules/shipments/outbound/shipments/ShipmentNew'

export default function New() {
    const title: string = 'Shipment Order'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ShipmentNew title={title} />
        </Fragment>
    )
}
