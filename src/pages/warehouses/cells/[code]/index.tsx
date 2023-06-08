import { Fragment } from "react"
import { useRouter } from "next/router"
import NextHead from "components/NextHead"
import CellDetails from "modules/warehouses/cell/CellDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Cell Details"
    
    return (
        <Fragment>
            <NextHead title={title} />
            <CellDetails title={title} code={query.code} />
        </Fragment>
    )
}
