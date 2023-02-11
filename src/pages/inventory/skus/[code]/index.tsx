import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import SkuDetails from 'modules/inventory/skus/SkuDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string ='SKU Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuDetails title={title} code={code} />
        </Fragment>
    )
}
