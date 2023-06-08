import { Fragment } from "react"
import NextHead from "components/NextHead"
import DepartmentNew from "modules/company/departments/DepartmentNew"

export default function New() {
    const title = "New Department"
    return (
        <Fragment>
            <NextHead title={title} />
            <DepartmentNew title={title} />
        </Fragment>
    )
}
