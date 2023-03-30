import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import OrgTable from "tables/OrgTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Organizations", href: "#" },
]

export default function DepartmentList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push("/company/organizations/new")
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
            <OrgTable />
        </Page>
    )
}
