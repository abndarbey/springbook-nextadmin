import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import GRNDetails from 'modules/shipments/outbound/grns/GRNDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'GRN Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <GRNDetails title={title} code={code} />
        </Fragment>
    )
}
