import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import InvoiceNew from 'modules/procurements/invoices/InvoiceNew'

export default function New() {
    const title: string = 'New Invoice'

    return (
        <Fragment>
            <PageTitle title={title} />
            <InvoiceNew title={title} />
        </Fragment>
    )
}
