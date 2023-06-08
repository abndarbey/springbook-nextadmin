import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import WCList from 'modules/contracts/client/warehouse-contracts/WCList'

export default function WarehouseContractss() {
    const title: string = 'Warehouse Contracts'

    return (
        <Fragment>
            <NextHead title={title} />
            <WCList title={title} />
        </Fragment>
    )
}
