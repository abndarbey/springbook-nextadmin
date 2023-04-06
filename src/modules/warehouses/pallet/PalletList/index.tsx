import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import PalletTable from "tables/warehouses/PalletTable"
import { PageProps } from "types/types"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Pallet", href: "#" },
]

export default function PalletList(props: PageProps) {
    const router = useRouter()  
    const handleNew = () => {
        router.push("/warehouses/pallets/new")
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
            <PalletTable />
        </Page>
    )
}
