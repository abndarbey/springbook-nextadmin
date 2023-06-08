import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ShipmentNew from 'modules/shipments/inbound/shipments/ShipmentNew'

export default function New() {
    const title: string = 'Shipment Order'

    return (
        <Fragment>
            <NextHead title={title} />
            <ShipmentNew title={title} />
        </Fragment>
    )
}
