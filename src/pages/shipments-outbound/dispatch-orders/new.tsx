import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import DispatchOrderNew from 'modules/shipments/outbound/dispatch-orders//DispatchOrderNew'

export default function New() {
    const title: string = 'New Dispatch Order'

    return (
        <Fragment>
            <PageTitle title={title} />
            <DispatchOrderNew title={title} />
        </Fragment>
    )
}
