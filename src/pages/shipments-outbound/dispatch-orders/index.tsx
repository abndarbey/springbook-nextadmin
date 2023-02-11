import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import DispatchOrderList from 'modules/shipments/outbound/dispatch-orders//DispatchOrderList'

export default function DispatchOrders() {
    const title: string = 'Dispatch Orders'

    return (
        <Fragment>
            <PageTitle title={title} />
            <DispatchOrderList title={title} />
        </Fragment>
    )
}
