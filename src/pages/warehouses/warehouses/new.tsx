import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import WarehouseNew from 'modules/warehouses/warehouse/WarehouseNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Warehouse Type' />
            <WarehouseNew />
        </Fragment>
    )
}
