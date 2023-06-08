import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import PicklistList from 'modules/shipments/outbound/picklists/PicklistList'

export default function Picklists() {
    const title: string = 'Picklists'

    return (
        <Fragment>
            <NextHead title={title} />
            <PicklistList title={title} />
        </Fragment>
    )
}
