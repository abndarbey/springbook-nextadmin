import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import CartonList from 'modules/inventory/cartons/CartonList'

export default function Cartons() {
    const title: string = 'Cartons'

    return (
        <Fragment>
            <NextHead title={title} />
            <CartonList title={title} />
        </Fragment>
    )
}
