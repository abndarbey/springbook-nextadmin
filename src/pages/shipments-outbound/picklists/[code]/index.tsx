import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PicklistDetails from 'modules/shipments/outbound/picklists/PicklistDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Picklist Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <PicklistDetails title={title} code={code} />
        </Fragment>
    )
}
