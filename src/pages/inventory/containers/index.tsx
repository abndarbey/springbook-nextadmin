import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ContainerList from 'modules/inventory/containers/ContainerList'

export default function Containers() {
    const title: string = 'Containers'

    return (
        <Fragment>
            <PageTitle title={title} />
            <ContainerList title={title} />
        </Fragment>
    )
}
