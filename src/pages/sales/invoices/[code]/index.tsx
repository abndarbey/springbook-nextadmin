import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import InvoiceDetails from 'modules/sales/invoices/InvoiceList'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Invoice Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <InvoiceDetails title={title} code={code} />
        </Fragment>
    )
}
