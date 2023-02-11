import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import RFQEdit from 'modules/procurements/rfqs/RFQEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'RFQ Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <RFQEdit title={title} code={code} />
        </Fragment>
    )
}
