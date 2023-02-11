import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import ShipmentDetails from 'modules/shipments/outbound/shipments/ShipmentDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Shipment Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <ShipmentDetails title={title} code={code} />
        </Fragment>
    )
}
