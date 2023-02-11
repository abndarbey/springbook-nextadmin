import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import InvoiceList from 'modules/procurements/invoices/InvoiceList'

export default function Invoices() {
    const title: string = 'Invoices'

    return (
        <Fragment>
            <PageTitle title={title} />
            <InvoiceList title={title} />
        </Fragment>
    )
}
