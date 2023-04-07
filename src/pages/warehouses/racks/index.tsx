import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import RackList from "modules/warehouses/rack/RackList"

export default function Rack() {
    const title: string = "Racks"
    return (
        <Fragment>
            <PageTitle title={title} />
            <RackList title={title} />
        </Fragment>
    )
}
