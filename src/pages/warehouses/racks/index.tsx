import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RackList from 'modules/warehouses/rack/RackList'

export default function Rack() {
    return (
        <Fragment>
            <PageTitle title='Rack ' />
            <RackList />
        </Fragment>
    )
}
