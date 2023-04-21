import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { PageProps } from "types/types"
import InventoryFilterBar from "components/InventoryFilterBar"
import PalletTable from "tables/inventory/PalletTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Pallets", href: "#" },
]

export default function PalletList(props: PageProps) {
    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <InventoryFilterBar />
            <PalletTable />
        </Page>
    )
}
