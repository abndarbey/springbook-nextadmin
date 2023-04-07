import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import CellList from "modules/warehouses/cell/CellList"

export default function Cell() {
    const title: string = "Cells"
    return (
        <Fragment>
            <PageTitle title={title} />
            <CellList title={title} />
        </Fragment>
    )
}
