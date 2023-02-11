import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import RFQDetails from 'modules/procurements/rfqs/RFQDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'RFQ Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <RFQDetails title={title} code={code} />
        </Fragment>
    )
}
