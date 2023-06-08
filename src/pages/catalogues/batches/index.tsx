import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import BatchList from 'modules/catalogues/batches/BatchList'

export default function Batches() {
    const title: string = 'Batches'

    return (
        <Fragment>
            <NextHead title={title} />
            <BatchList title={title} />
        </Fragment>
    )
}
