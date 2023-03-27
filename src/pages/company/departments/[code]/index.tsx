import { Fragment } from "react"
import { useRouter } from "next/router"
import PageTitle from "components/PageTitle"
import DepartmentDetails from "modules/company/departments/DepartmentDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const title = "Department Details"
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <DepartmentDetails title={title} code={query.code} />
        </Fragment>
    )
}
