import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { PageProps } from "types/types"
import SalesOrderTable from "tables/orders/SalesOrderTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Sales Orders", href: "#" },
]

export default function SalesOrderList(props: PageProps) {

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <SalesOrderTable view={props.view!} />
        </Page>
    )
}
