import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import QuotationList from 'modules/sales/quotations/QuotationList'

export default function Quotations() {
    const title: string = 'Quotations'

    return (
        <Fragment>
            <PageTitle title={title} />
            <QuotationList title={title} />
        </Fragment>
    )
}
