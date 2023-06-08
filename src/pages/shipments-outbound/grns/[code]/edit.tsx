import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import GRNEdit from 'modules/shipments/outbound/grns/GRNEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'GRN Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <GRNEdit title={title} code={code} />
        </Fragment>
    )
}
