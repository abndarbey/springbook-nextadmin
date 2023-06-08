import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import ShipmentDetails from 'modules/shipments/outbound/shipments/ShipmentDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Shipment Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <ShipmentDetails title={title} code={code} />
        </Fragment>
    )
}
