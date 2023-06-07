import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import PurchaseOrderTable from "tables/orders/PurchaseOrderTable"
import { ViewOption } from "@lib/generated/hooks"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Purchase Orders", href: "#" },
]

export default function PurchaseOrderList(props: PageProps) {
    const router = useRouter()
    const viewType: string = props.view == ViewOption.Buyer ? 'procurements' : 'sales'

    const handleNew = () => {
        router.push(`/${viewType}/purchase-orders/new`)
    }

    let actionButtons: IActionButtonProps[] = [
        {
            type: "new",
            name: "New",
            disabled: false,
            action: handleNew,
        }
    ]

    if (props.view && props.view === ViewOption.Seller) {
        actionButtons = []
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <PurchaseOrderTable view={props.view!} />
        </Page>
    )
}
