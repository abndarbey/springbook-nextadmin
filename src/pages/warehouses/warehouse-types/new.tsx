import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import WTNew from "modules/warehouses/warehouseType/WTNew"

export default function New() {
    const title: string = "New Warehouse Type"
    return (
        <Fragment>
            <PageTitle title={title} />
            <WTNew title={title} />
        </Fragment>
    )
}
