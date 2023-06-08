import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import STOEdit from 'modules/sales/stock-transfer-orders/STOEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Stock Transfer Order Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <STOEdit title={title} code={code} />
        </Fragment>
    )
}
