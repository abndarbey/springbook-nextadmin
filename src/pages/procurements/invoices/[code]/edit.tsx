import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import InvoiceEdit from 'modules/procurements/invoices/InvoiceEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Invoice Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <InvoiceEdit title={title} code={code} />
        </Fragment>
    )
}
