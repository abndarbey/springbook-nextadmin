import { useRouter } from "next/router"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import InventoryFilterBar from "components/InventoryFilterBar"
import SkuTable from "tables/inventory/SkuTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "SKUs", href: "#" },
]

export default function SkuList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push("/inventory/skus/new")
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
            <SkuTable />
        </Page>
    )
}
