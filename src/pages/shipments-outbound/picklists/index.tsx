import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PicklistList from 'modules/shipments/outbound/picklists/PicklistList'

export default function Picklists() {
    const title: string = 'Picklists'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PicklistList title={title} />
        </Fragment>
    )
}
