import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import DepartmentTable from "tables/company/DepartmentTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Departments", href: "#" },
]

export default function DepartmentList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push("/company/departments/new")
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
            <DepartmentTable />
        </Page>
    )
}
