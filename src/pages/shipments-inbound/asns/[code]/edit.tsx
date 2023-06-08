import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import ASNEdit from 'modules/shipments/inbound/asns/ASNEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'ASN Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <ASNEdit title={title} code={code} />
        </Fragment>
    )
}
