import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import ShipmentEdit from 'modules/shipments/inbound/shipments/ShipmentEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Shipment Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <ShipmentEdit title={title} code={code} />
        </Fragment>
    )
}
