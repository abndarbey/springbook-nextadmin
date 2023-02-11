import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PutawayNew from 'modules/shipments/inbound/putaways/PutawayNew'

export default function New() {
    const title: string = 'New Putaway'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PutawayNew title={title} />
        </Fragment>
    )
}
