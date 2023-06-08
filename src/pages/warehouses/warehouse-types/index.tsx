import { Fragment } from "react"
import NextHead from "components/NextHead"
import WTList from "modules/warehouses/warehouseType/WTList"

export default function WarehouseTypes() {
    const title: string = "Warehouse Types"
    return (
        <Fragment>
            <NextHead title={title} />
            <WTList title={title} />
        </Fragment>
    )
}
