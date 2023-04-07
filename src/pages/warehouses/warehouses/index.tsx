import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import WarehouseList from "modules/warehouses/warehouse/WarehouseList"

export default function Warehouse() {
    const title: string = "Warehouses"
    return (
        <Fragment>
            <PageTitle title={title} />
            <WarehouseList title={title} />
        </Fragment>
    )
}
