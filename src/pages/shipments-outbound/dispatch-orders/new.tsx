import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import DispatchOrderNew from 'modules/shipments/outbound/dispatch-orders//DispatchOrderNew'

export default function New() {
    const title: string = 'New Dispatch Order'

    return (
        <Fragment>
            <NextHead title={title} />
            <DispatchOrderNew title={title} />
        </Fragment>
    )
}
