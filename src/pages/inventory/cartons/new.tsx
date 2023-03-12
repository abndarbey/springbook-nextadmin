import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import CartonNew from 'modules/inventory/cartons/CartonNew'

export default function New() {
    const title: string = 'New Cartons'

    return (
        <Fragment>
            <PageTitle title={title} />
            <CartonNew title={title} />
        </Fragment>
    )
}
