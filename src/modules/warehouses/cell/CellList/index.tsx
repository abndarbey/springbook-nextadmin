import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import CellTable from "tables/warehouses/CellTable"
import { PageProps } from "types/types"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Cell", href: "#" },
]

export default function CellList(props: PageProps) {
    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <CellTable />
        </Page>
    )
}
