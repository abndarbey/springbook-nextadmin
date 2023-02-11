import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import DispatchOrderDetails from 'modules/shipments/outbound/dispatch-orders/DispatchOrderDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Dispatch Order Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <DispatchOrderDetails title={title} code={code} />
        </Fragment>
    )
}
