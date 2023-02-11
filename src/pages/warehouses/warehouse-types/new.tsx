import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import WTNew from 'modules/warehouses/warehouseType/WTNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Warehouse Type' />
            <WTNew />
        </Fragment>
    )
}
