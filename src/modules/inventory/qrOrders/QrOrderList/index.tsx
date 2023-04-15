import { useRouter } from "next/router"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import InventoryFilterBar from "components/InventoryFilterBar"
import QrOrderTable from "tables/inventory/QrOrderTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "QR Orders", href: "#" },
]

export default function QrOrderList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push("/inventory/qr-orders/new")
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
            <QrOrderTable />
        </Page>
    )
}
