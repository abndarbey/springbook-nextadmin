import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PutawayDetails from 'modules/shipments/inbound/putaways/PutawayDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Putaway Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <PutawayDetails title={title} code={code} />
        </Fragment>
    )
}
