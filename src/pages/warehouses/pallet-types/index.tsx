import { Fragment } from "react"
import PageTitle from "components/PageTitle"
import PTList from "modules/warehouses/palletType/PTList"

export default function PalletTypes() {
    const title: string = "Pallet Types"
    return (
        <Fragment>
            <PageTitle title={title} />
            <PTList title={title} />
        </Fragment>
    )
}
