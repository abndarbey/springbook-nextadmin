import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import QrOrderNew from 'modules/inventory/qrOrders/QrOrderNew'

export default function New() {
    const title: string = 'New QR Order'

    return (
        <Fragment>
            <PageTitle title={title} />
            <QrOrderNew title={title} />
        </Fragment>
    )
}
