import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { PageProps } from "types/types"
import InventoryFilterBar from "components/InventoryFilterBar"
import ContainerTable from "tables/inventory/ContainerTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Containers", href: "#" },
]

export default function ContainerList(props: PageProps) {
    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <InventoryFilterBar />
            <ContainerTable />
        </Page>
    )
}
