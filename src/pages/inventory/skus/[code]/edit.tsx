import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import SkuEdit from 'modules/inventory/skus/SkuEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string ='SKU Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <SkuEdit title={title} code={code} />
        </Fragment>
    )
}
