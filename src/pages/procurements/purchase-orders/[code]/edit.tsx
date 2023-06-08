import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PurchaseOrderEdit from 'modules/procurements/purchase-orders/PurchaseOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Purchase Order Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <PurchaseOrderEdit title={title} code={code} />
        </Fragment>
    )
}
