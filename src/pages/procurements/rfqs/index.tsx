import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RFQList from 'modules/procurements/rfqs/RFQList'

export default function RFQs() {
    const title: string = 'RFQs'

    return (
        <Fragment>
            <NextHead title={title} />
            <RFQList title={title} />
        </Fragment>
    )
}
