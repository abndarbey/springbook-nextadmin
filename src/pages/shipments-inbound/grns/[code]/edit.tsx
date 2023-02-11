import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import GRNEdit from 'modules/shipments/inbound/grns/GRNEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'GRN Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <GRNEdit title={title} code={code} />
        </Fragment>
    )
}
