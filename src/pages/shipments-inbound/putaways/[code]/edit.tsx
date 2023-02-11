import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PutawayEdit from 'modules/shipments/inbound/putaways/PutawayEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Putaway Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PutawayEdit title={title} code={code} />
        </Fragment>
    )
}
