import { Fragment } from "react"
import { useRouter } from "next/router"
import PageTitle from "components/PageTitle"
import PalletTypeDetails from "modules/warehouses/palletType/PTDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Pallet Type Details"
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <PalletTypeDetails title={title} code={query.code} />
        </Fragment>
    )
}
