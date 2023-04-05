import { Fragment } from "react"
import { useRouter } from "next/router"
import PageTitle from "components/PageTitle"
import CartonDetails from "modules/inventory/cartons/CartonDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Carton Details"
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <CartonDetails title={title} code={query.code} />
        </Fragment>
    )
}
