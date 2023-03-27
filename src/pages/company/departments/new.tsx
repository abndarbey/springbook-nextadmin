import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import DepartmentNew from "modules/company/departments/DepartmentNew"

export default function New() {
    const title = "New Department"
    return (
        <Fragment>
            <PageTitle title={title} />
            <DepartmentNew title={title} />
        </Fragment>
    )
}
