import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import ASNDetails from 'modules/shipments/inbound/asns/ASNDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'ASN Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <ASNDetails title={title} code={code} />
        </Fragment>
    )
}
