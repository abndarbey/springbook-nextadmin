import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import Roles from "tables/Roles"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Roles", href: "#" },
]

export default function RoleList() {
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
            <PageHeader title="Roles" buttons={actionButtons} />
            <Roles />
        </Page>
    )
}
