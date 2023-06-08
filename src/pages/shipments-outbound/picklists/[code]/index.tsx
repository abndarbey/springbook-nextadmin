import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PicklistDetails from 'modules/shipments/outbound/picklists/PicklistDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Picklist Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <PicklistDetails title={title} code={code} />
        </Fragment>
    )
}
