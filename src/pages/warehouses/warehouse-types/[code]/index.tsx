import { Fragment } from "react"
import { useRouter } from "next/router"
import NextHead from "components/NextHead"
import WarehouseTypeDetails from "modules/warehouses/warehouseType/WTDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string ="Warehouse Type Details"
    
    return (
        <Fragment>
            <NextHead title={title} />
            <WarehouseTypeDetails title={title} code={query.code} />
        </Fragment>
    )
}
