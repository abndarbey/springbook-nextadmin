import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import QuotationEdit from 'modules/procurements/quotations/QuotationEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Quotation Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <QuotationEdit title={title} code={code} />
        </Fragment>
    )
}
