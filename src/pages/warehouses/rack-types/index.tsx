import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RTList from 'modules/warehouses/rackType/RTList'

export default function RackTypes() {
    const title: string = "Rack Types"
    return (
        <Fragment>
            <NextHead title={title} />
            <RTList title={title} />
        </Fragment>
    )
}
