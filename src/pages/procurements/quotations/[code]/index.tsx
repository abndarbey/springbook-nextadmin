import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import QuotationDetails from 'modules/procurements/quotations/QuotationDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Quotation Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <QuotationDetails title={title} code={code} />
        </Fragment>
    )
}
