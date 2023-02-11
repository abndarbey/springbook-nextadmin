import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import WarehouseList from 'modules/warehouses/warehouse/WarehouseList'

export default function Warehouse() {
    return (
        <Fragment>
            <PageTitle title='Warehouse ' />
            <WarehouseList />
        </Fragment>
    )
}
