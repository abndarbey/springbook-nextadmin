import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { PageProps } from "types/types"
import InventoryFilterBar from "components/InventoryFilterBar"
import CartonTable from "tables/inventory/CartonTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Cartons", href: "#" },
]

export default function CartonList(props: PageProps) {
    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <InventoryFilterBar />
            <CartonTable />
        </Page>
    )
}
