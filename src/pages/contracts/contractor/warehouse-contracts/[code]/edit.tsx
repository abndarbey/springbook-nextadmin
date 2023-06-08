import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import WCEdit from 'modules/contracts/contractor/warehouse-contracts/WCEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string ='WC Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <WCEdit title={title} code={code} />
        </Fragment>
    )
}
