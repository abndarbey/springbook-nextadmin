import { Fragment } from "react"
import NextHead from "components/NextHead"
import WarehouseList from "modules/warehouses/warehouse/WarehouseList"

export default function Warehouse() {
    const title: string = "Warehouses"
    return (
        <Fragment>
            <NextHead title={title} />
            <WarehouseList title={title} />
        </Fragment>
    )
}
