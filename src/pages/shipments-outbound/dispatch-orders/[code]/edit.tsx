import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import DispatchOrderEdit from 'modules/shipments/outbound/dispatch-orders/DispatchOrderEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Dispatch Order Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <DispatchOrderEdit title={title} code={code} />
        </Fragment>
    )
}
