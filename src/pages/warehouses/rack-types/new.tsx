import { Fragment } from "react"
import NextHead from "components/NextHead"
import RTNew from "modules/warehouses/rackType/RTNew"

export default function New() {
    const title: string = "New Rack Type"
    return (
        <Fragment>
            <NextHead title={title} />
            <RTNew title={title} />
        </Fragment>
    )
}
