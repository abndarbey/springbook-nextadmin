import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import BatchList from 'modules/nexport/batches/BatchList'

export default function Batches() {
    const title: string = 'Nexport Batches'

    return (
        <Fragment>
            <PageTitle title={title} />
            <BatchList title={title} />
        </Fragment>
    )
}
