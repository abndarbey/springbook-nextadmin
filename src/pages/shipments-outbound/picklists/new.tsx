import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import PicklistNew from 'modules/shipments/outbound/picklists/PicklistNew'

export default function New() {
    const title: string = 'New Picklist'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PicklistNew title={title} />
        </Fragment>
    )
}
