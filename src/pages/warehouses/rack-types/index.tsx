import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RTList from 'modules/warehouses/rackType/RTList'

export default function RackTypes() {
    return (
        <Fragment>
            <PageTitle title='Rack Types' />
            <RTList />
        </Fragment>
    )
}
