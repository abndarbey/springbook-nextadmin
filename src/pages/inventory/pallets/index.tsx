import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PalletList from 'modules/inventory/pallets/PalletList'

export default function Pallets() {
    const title: string = 'Pallets'

    return (
        <Fragment>
            <NextHead title={title} />
            <PalletList title={title} />
        </Fragment>
    )
}
