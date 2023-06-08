import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import QrOrderList from 'modules/inventory/qrOrders/QrOrderList'

export default function QrOrders() {
    const title: string = 'QR Orders'

    return (
        <Fragment>
            <NextHead title={title} />
            <QrOrderList title={title} />
        </Fragment>
    )
}
