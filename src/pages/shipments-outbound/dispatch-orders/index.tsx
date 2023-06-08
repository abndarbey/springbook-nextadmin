import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import DispatchOrderList from 'modules/shipments/outbound/dispatch-orders//DispatchOrderList'

export default function DispatchOrders() {
    const title: string = 'Dispatch Orders'

    return (
        <Fragment>
            <NextHead title={title} />
            <DispatchOrderList title={title} />
        </Fragment>
    )
}
