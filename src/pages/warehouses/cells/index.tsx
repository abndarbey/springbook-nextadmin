import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import CellList from "modules/warehouses/cell/CellList"

export default function Cell() {
    const title: string = "Cells"
    return (
        <Fragment>
            <NextHead title={title} />
            <CellList title={title} />
        </Fragment>
    )
}
