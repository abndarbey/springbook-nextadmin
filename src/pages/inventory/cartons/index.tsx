import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import CartonList from 'modules/inventory/cartons/CartonList'

export default function Cartons() {
    const title: string = 'Cartons'

    return (
        <Fragment>
            <PageTitle title={title} />
            <CartonList title={title} />
        </Fragment>
    )
}
