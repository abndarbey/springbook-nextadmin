import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import BatchNew from 'modules/inventory/batches/BatchNew'

export default function New() {
    const title: string = 'New Batch'

    return (
        <Fragment>
            <NextHead title={title} />
            <BatchNew title={title} />
        </Fragment>
    )
}
