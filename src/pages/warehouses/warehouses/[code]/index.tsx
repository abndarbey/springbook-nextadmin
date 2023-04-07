import { Fragment } from "react"
import { useRouter } from "next/router"
import PageTitle from "components/PageTitle"
import WarehouseDetails from "modules/warehouses/warehouse/WarehouseDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Warehouse Details"
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <WarehouseDetails title={title} code={query.code} />
        </Fragment>
    )
}
