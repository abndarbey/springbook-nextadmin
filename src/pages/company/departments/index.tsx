import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import DepartmentList from 'modules/company/departments/DepartmentList'

export default function Departments() {
    return (
        <Fragment>
            <PageTitle title='Departments' />
            <DepartmentList />
        </Fragment>
    )
}
