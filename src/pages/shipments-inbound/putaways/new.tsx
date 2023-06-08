import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PutawayNew from 'modules/shipments/inbound/putaways/PutawayNew'

export default function New() {
    const title: string = 'New Putaway'

    return (
        <Fragment>
            <NextHead title={title} />
            <PutawayNew title={title} />
        </Fragment>
    )
}
