import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import CellList from 'modules/warehouses/cell/CellList'

export default function Cell() {
    return (
        <Fragment>
            <PageTitle title='Cell ' />
            <CellList />
        </Fragment>
    )
}
