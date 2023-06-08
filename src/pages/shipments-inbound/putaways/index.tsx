import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PutawayList from 'modules/shipments/inbound/putaways/PutawayList'

export default function Putaways() {
    const title: string = 'Putaways'

    return (
        <Fragment>
            <NextHead title={title} />
            <PutawayList title={title} />
        </Fragment>
    )
}
