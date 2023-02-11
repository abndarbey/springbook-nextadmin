import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PalletNew from 'modules/warehouses/pallet/PalletNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Pallet Type' />
            <PalletNew />
        </Fragment>
    )
}
