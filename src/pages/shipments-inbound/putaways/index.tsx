import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PutawayList from 'modules/shipments/inbound/putaways/PutawayList'

export default function Putaways() {
    const title: string = 'Putaways'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PutawayList title={title} />
        </Fragment>
    )
}
