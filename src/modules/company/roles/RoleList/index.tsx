import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import RoleTable from "tables/company/RoleTable"
import { PageProps } from "types/types"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Roles", href: "#" },
]

export default function RoleList(props: PageProps) {
    const router = useRouter()  
    const handleNew = () => {
        router.push("/company/roles/new")
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
            <RoleTable />
        </Page>
    )
}
