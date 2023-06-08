import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import InvoiceEdit from 'modules/sales/invoices/InvoiceEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Invoice Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <InvoiceEdit title={title} code={code} />
        </Fragment>
    )
}
