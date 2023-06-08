import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import WarehouseNew from 'modules/warehouses/warehouse/WarehouseNew'

export default function New() {
    return (
        <Fragment>
            <NextHead title='New Warehouse Type' />
            <WarehouseNew />
        </Fragment>
    )
}
