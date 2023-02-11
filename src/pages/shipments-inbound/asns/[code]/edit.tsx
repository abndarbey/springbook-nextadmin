import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import ASNEdit from 'modules/shipments/inbound/asns/ASNEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'ASN Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ASNEdit title={title} code={code} />
        </Fragment>
    )
}
