import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import BatchNew from 'modules/catalogues/batches/BatchNew'

export default function New() {
    const title: string = 'New Batch'

    return (
        <Fragment>
            <PageTitle title={title} />
            <BatchNew title={title} />
        </Fragment>
    )
}