import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import QrOrderNew from 'modules/inventory/qrOrders/QrOrderNew'

export default function New() {
    const title: string = 'New QR Order'

    return (
        <Fragment>
            <NextHead title={title} />
            <QrOrderNew title={title} />
        </Fragment>
    )
}
