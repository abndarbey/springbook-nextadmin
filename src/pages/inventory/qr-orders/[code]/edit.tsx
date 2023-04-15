import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import SkuEdit from 'modules/inventory/skus/SkuEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string ='QR Order Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <SkuEdit title={title} code={code} />
        </Fragment>
    )
}
