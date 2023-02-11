import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import DepartmentNew from 'modules/company/departments/DepartmentNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Department' />
            <DepartmentNew />
        </Fragment>
    )
}
