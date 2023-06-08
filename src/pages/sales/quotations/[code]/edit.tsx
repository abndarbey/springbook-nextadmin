import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import QuotationEdit from 'modules/sales/quotations/QuotationEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Quotation Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <QuotationEdit title={title} code={code} />
        </Fragment>
    )
}
