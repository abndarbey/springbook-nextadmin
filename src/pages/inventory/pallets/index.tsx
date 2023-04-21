import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PalletList from 'modules/inventory/pallets/PalletList'

export default function Pallets() {
    const title: string = 'Pallets'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PalletList title={title} />
        </Fragment>
    )
}
