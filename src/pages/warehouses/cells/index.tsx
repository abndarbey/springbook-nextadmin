import { Fragment } from "react"
import NextHead from "components/NextHead"
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
