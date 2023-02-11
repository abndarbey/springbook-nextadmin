import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import QuotationNew from 'modules/sales/quotations/QuotationNew'

export default function New() {
    const title: string = 'New Quotation'

    return (
        <Fragment>
            <PageTitle title={title} />
            <QuotationNew title={title} />
        </Fragment>
    )
}
