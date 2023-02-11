import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RFQNew from 'modules/procurements/rfqs/RFQNew'

export default function New() {
    const title: string = 'New RFQ'

    return (
        <Fragment>
            <PageTitle title={title} />
            <RFQNew title={title} />
        </Fragment>
    )
}
