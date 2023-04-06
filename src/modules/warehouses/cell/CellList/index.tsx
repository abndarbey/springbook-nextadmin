import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import CellTable from "tables/warehouses/CellTable"
import { PageProps } from "types/types"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Cell", href: "#" },
]

export default function CellList(props: PageProps) {
    const router = useRouter()  
    const handleNew = () => {
        router.push("/warehouses/cells/new")
    }

    const actionButtons: IActionButtonProps[] = [
        {
            type: "new",
            name: "New",
            disabled: false,
            action: handleNew,
        }
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <CellTable />
        </Page>
    )
}
