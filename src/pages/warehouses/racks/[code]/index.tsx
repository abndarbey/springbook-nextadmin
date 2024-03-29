import { Fragment } from "react"
import { useRouter } from "next/router"
import NextHead from "components/NextHead"
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
            <NextHead title={title} />
            <RackDetails title={title} code={query.code} />
        </Fragment>
    )
}
