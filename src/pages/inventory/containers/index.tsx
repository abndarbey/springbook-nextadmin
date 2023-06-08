import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ContainerList from 'modules/inventory/containers/ContainerList'

export default function Containers() {
    const title: string = 'Containers'

    return (
        <Fragment>
            <NextHead title={title} />
            <ContainerList title={title} />
        </Fragment>
    )
}
