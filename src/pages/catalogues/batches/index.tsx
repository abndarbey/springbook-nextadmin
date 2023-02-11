import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import BatchList from 'modules/catalogues/batches/BatchList'

export default function Batches() {
    const title: string = 'Batches'

    return (
        <Fragment>
            <PageTitle title={title} />
            <BatchList title={title} />
        </Fragment>
    )
}
