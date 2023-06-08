import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import RFQEdit from 'modules/procurements/rfqs/RFQEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'RFQ Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <RFQEdit title={title} code={code} />
        </Fragment>
    )
}
