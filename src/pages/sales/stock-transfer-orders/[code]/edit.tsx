import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import STOEdit from 'modules/sales/stock-transfer-orders/STOEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Stock Transfer Order Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <STOEdit title={title} code={code} />
        </Fragment>
    )
}
