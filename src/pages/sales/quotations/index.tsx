import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import QuotationList from 'modules/sales/quotations/QuotationList'

export default function Quotations() {
    const title: string = 'Quotations'

    return (
        <Fragment>
            <NextHead title={title} />
            <QuotationList title={title} />
        </Fragment>
    )
}
