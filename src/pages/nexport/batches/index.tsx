import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import BatchList from 'modules/nexport/batches/BatchList'

export default function Batches() {
    const title: string = 'Nexport Batches'

    return (
        <Fragment>
            <NextHead title={title} />
            <BatchList title={title} />
        </Fragment>
    )
}
