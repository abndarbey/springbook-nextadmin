import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import WTList from "modules/warehouses/warehouseType/WTList"

export default function WarehouseTypes() {
    const title: string = "Warehouse Types"
    return (
        <Fragment>
            <PageTitle title={title} />
            <WTList title={title} />
        </Fragment>
    )
}
