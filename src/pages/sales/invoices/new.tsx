import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import InvoiceNew from 'modules/sales/invoices/InvoiceNew'

export default function New() {
    const title: string = 'New Invoice'

    return (
        <Fragment>
            <NextHead title={title} />
            <InvoiceNew title={title} />
        </Fragment>
    )
}
