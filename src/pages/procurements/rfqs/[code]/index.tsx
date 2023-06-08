import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import RFQDetails from 'modules/procurements/rfqs/RFQDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'RFQ Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <RFQDetails title={title} code={code} />
        </Fragment>
    )
}
