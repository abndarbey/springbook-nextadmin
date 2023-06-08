import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RFQNew from 'modules/procurements/rfqs/RFQNew'

export default function New() {
    const title: string = 'New RFQ'

    return (
        <Fragment>
            <NextHead title={title} />
            <RFQNew title={title} />
        </Fragment>
    )
}
