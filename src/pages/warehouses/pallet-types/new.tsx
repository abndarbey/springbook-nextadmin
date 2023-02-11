import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PTNew from 'modules/warehouses/palletType/PTNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New pallet Type' />
            <PTNew />
        </Fragment>
    )
}
