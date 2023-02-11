import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import QuotationDetails from 'modules/sales/quotations/QuotationDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Quotation Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <QuotationDetails title={title} code={code} />
        </Fragment>
    )
}
