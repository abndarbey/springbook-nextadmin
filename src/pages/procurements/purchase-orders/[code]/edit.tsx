import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PurchaseOrderEdit from 'modules/procurements/purchase-orders/PurchaseOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Purchase Order Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PurchaseOrderEdit title={title} code={code} />
        </Fragment>
    )
}
