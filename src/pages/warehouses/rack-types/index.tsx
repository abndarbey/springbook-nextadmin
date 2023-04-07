import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RTList from 'modules/warehouses/rackType/RTList'

export default function RackTypes() {
    const title: string = "Rack Types"
    return (
        <Fragment>
            <PageTitle title={title} />
            <RTList title={title} />
        </Fragment>
    )
}
