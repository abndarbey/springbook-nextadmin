import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import DispatchOrderDetails from 'modules/shipments/outbound/dispatch-orders/DispatchOrderDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Dispatch Order Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <DispatchOrderDetails title={title} code={code} />
        </Fragment>
    )
}
