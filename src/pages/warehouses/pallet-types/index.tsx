import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PTList from 'modules/warehouses/palletType/PTList'

export default function PalletTypes() {
    return (
        <Fragment>
            <PageTitle title='Pallet Types' />
            <PTList />
        </Fragment>
    )
}
