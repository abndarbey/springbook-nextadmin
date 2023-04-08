import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import RackNew from "modules/warehouses/rack/RackNew"

export default function New() {
    const title: string = "New Rack"
    return (
        <Fragment>
            <PageTitle title={title} />
            <RackNew title={title} />
        </Fragment>
    )
}
