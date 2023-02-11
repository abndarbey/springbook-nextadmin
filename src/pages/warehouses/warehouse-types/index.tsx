import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import WTList from 'modules/warehouses/warehouseType/WTList'

export default function WarehouseTypes() {
    return (
        <Fragment>
            <PageTitle title='Warehouse Types' />
            <WTList />
        </Fragment>
    )
}
