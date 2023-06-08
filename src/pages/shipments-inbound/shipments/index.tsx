import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ShipmentList from 'modules/shipments/inbound/shipments/ShipmentList'

export default function Shipments() {
    const title: string = 'Shipments'

    return (
        <Fragment>
            <NextHead title={title} />
            <ShipmentList title={title} />
        </Fragment>
    )
}
