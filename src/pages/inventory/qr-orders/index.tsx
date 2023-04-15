import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import QrOrderList from 'modules/inventory/qrOrders/QrOrderList'

export default function QrOrders() {
    const title: string = 'QR Orders'

    return (
        <Fragment>
            <PageTitle title={title} />
            <QrOrderList title={title} />
        </Fragment>
    )
}
