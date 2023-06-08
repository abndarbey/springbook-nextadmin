import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import DepartmentList from 'modules/company/departments/DepartmentList'

export default function Departments() {
    const title: string = 'Departments'
    return (
        <Fragment>
            <NextHead title={title} />
            <DepartmentList title={title} />
        </Fragment>
    )
}
