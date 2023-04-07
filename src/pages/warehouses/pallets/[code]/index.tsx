import { Fragment } from "react"
import { useRouter } from "next/router"
import PageTitle from "components/PageTitle"
import PalletDetails from "modules/warehouses/pallet/PalletDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Pallet Details"
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <PalletDetails title={title} code={query.code} />
        </Fragment>
    )
}
