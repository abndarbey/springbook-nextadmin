import { Fragment } from "react"
import { useRouter } from "next/router"
import NextHead from "components/NextHead"
import PalletDetails from "modules/inventory/pallets/PalletDetails"
import PageLoader from "components/PageLoader"

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    const title: string = "Pallet Details"
    
    return (
        <Fragment>
            <NextHead title={title} />
            <PalletDetails title={title} code={query.code} />
        </Fragment>
    )
}
