import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PicklistNew from 'modules/shipments/outbound/picklists/PicklistNew'

export default function New() {
    const title: string = 'New Picklist'

    return (
        <Fragment>
            <NextHead title={title} />
            <PicklistNew title={title} />
        </Fragment>
    )
}
