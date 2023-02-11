import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import ShipmentEdit from 'modules/shipments/outbound/shipments/ShipmentEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Shipment Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ShipmentEdit title={title} code={code} />
        </Fragment>
    )
}
