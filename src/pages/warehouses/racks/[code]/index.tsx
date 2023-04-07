import { Fragment } from "react"
import { useRouter } from "next/router"
import PageTitle from "components/PageTitle"
import RackDetails from "modules/warehouses/rack/RackDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Rack Details"
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <RackDetails title={title} code={query.code} />
        </Fragment>
    )
}
