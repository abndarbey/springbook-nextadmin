import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import WCList from 'modules/contracts/client/warehouse-contracts/WCList'

export default function WarehouseContractss() {
    const title: string = 'Warehouse Contracts'

    return (
        <Fragment>
            <PageTitle title={title} />
            <WCList title={title} />
        </Fragment>
    )
}
