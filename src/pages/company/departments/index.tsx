import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import DepartmentList from 'modules/company/departments/DepartmentList'

export default function Departments() {
    const title: string = 'Departments'
    return (
        <Fragment>
            <PageTitle title={title} />
            <DepartmentList title={title} />
        </Fragment>
    )
}
