import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PalletList from 'modules/warehouses/pallet/PalletList'

export default function Pallet() {
    const title: string = "Pallets"
    return (
        <Fragment>
            <PageTitle title={title} />
            <PalletList title={title} />
        </Fragment>
    )
}
