import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import GRNDetails from 'modules/shipments/inbound/grns/GRNDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'GRN Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <GRNDetails title={title} code={code} />
        </Fragment>
    )
}
