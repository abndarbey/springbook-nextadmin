import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import WCNew from 'modules/contracts/contractor/warehouse-contracts/WCNew'

export default function New() {
    const title: string = 'New Warehouse Contract'

    return (
        <Fragment>
            <NextHead title={title} />
            <WCNew title={title} />
        </Fragment>
    )
}
