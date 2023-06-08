import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import InvoiceList from 'modules/procurements/invoices/InvoiceList'

export default function Invoices() {
    const title: string = 'Invoices'

    return (
        <Fragment>
            <NextHead title={title} />
            <InvoiceList title={title} />
        </Fragment>
    )
}
