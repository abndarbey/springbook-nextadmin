import { Fragment } from "react"
import NextHead from "components/NextHead"
import RackList from "modules/warehouses/rack/RackList"

export default function Rack() {
    const title: string = "Racks"
    return (
        <Fragment>
            <NextHead title={title} />
            <RackList title={title} />
        </Fragment>
    )
}
