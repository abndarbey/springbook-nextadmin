import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PutawayEdit from 'modules/shipments/inbound/putaways/PutawayEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Putaway Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <PutawayEdit title={title} code={code} />
        </Fragment>
    )
}
