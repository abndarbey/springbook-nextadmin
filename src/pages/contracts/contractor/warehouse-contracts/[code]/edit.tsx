import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import WCEdit from 'modules/contracts/contractor/warehouse-contracts/WCEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string ='WC Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <WCEdit title={title} code={code} />
        </Fragment>
    )
}
