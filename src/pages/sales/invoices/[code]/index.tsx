import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import InvoiceDetails from 'modules/sales/invoices/InvoiceList'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Invoice Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <InvoiceDetails title={title} code={code} />
        </Fragment>
    )
}
