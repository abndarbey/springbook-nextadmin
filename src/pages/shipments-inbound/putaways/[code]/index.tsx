import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PutawayDetails from 'modules/shipments/inbound/putaways/PutawayDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Putaway Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <PutawayDetails title={title} code={code} />
        </Fragment>
    )
}
