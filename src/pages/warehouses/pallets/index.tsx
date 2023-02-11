import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PalletList from 'modules/warehouses/pallet/PalletList'

export default function Pallet() {
    return (
        <Fragment>
            <PageTitle title='Pallet ' />
            <PalletList />
        </Fragment>
    )
}
