import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import WCNew from 'modules/contracts/contractor/warehouse-contracts/WCNew'

export default function New() {
    const title: string = 'New Warehouse Contract'

    return (
        <Fragment>
            <PageTitle title={title} />
            <WCNew title={title} />
        </Fragment>
    )
}
