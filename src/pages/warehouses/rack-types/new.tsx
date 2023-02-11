import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RTNew from 'modules/warehouses/rackType/RTNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New rack Type' />
            <RTNew />
        </Fragment>
    )
}
