import { Fragment } from "react"
import { useRouter } from "next/router"
import NextHead from "components/NextHead"
import ContainerDetails from "modules/inventory/containers/ContainerDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Container Details"
    
    return (
        <Fragment>
            <NextHead title={title} />
            <ContainerDetails title={title} code={query.code} />
        </Fragment>
    )
}
