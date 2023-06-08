import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import QuotationNew from 'modules/procurements/quotations/QuotationNew'

export default function New() {
    const title: string = 'New Quotation'

    return (
        <Fragment>
            <NextHead title={title} />
            <QuotationNew title={title} />
        </Fragment>
    )
}
