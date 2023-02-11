import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RackNew from 'modules/warehouses/rack/RackNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Rack Type' />
            <RackNew />
        </Fragment>
    )
}
