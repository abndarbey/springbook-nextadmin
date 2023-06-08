import { Fragment } from "react"
import NextHead from "components/NextHead"
import RackNew from "modules/warehouses/rack/RackNew"

export default function New() {
    const title: string = "New Rack"
    return (
        <Fragment>
            <NextHead title={title} />
            <RackNew title={title} />
        </Fragment>
    )
}
