import { Fragment } from "react"
import { useRouter } from "next/router"
import NextHead from "components/NextHead"
import OrganizationDetails from "modules/company/organizations/OrganizationDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const title: string = "Organization Details"
    
    return (
        <Fragment>
            <NextHead title={title} />
            <OrganizationDetails title={title} code={query.code} />
        </Fragment>
    )
}
