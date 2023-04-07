import { useRouter } from "next/router"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import InventoryFilterBar from "components/InventoryFilterBar"
import CartonTable from "tables/inventory/CartonTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "SKUs", href: "#" },
]

export default function CartonList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push("/inventory/cartons/new")
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
            <InventoryFilterBar />
            <CartonTable />
        </Page>
    )
}
