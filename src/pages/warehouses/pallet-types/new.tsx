import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import PTNew from "modules/warehouses/palletType/PTNew"

export default function New() {
    const title: string = "New Pallet Type"
    return (
        <Fragment>
            <PageTitle title={title} />
            <PTNew title={title} />
        </Fragment>
    )
}
