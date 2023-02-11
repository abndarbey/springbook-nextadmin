import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RFQList from 'modules/procurements/rfqs/RFQList'

export default function RFQs() {
    const title: string = 'RFQs'

    return (
        <Fragment>
            <PageTitle title={title} />
            <RFQList title={title} />
        </Fragment>
    )
}
