import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import WarehouseTable from "tables/warehouses/WarehouseTable"
import { PageProps } from "types/types"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Warehouses", href: "#" },
]

export default function WarehouseList(props: PageProps) {
    const router = useRouter()  
    const handleNew = () => {
        router.push("/warehouses/warehouses/new")
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
            <WarehouseTable />
        </Page>
    )
}
