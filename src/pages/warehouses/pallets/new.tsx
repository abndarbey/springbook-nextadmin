import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PalletNew from 'modules/warehouses/pallet/PalletNew'

export default function New() {
    const title: string = "New Pallet"
    return (
        <Fragment>
            <PageTitle title={title} />
            <PalletNew title={title} />
        </Fragment>
    )
}
