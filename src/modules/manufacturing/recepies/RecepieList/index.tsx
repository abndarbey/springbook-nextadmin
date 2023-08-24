import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import RecepieTable from "tables/manufacturing/RecepieTable"
import { ViewOption } from "gql/generated/hooks"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Recepies", href: "#" },
]

export default function RecepieList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push(`/manufacturing/recepies/new`)
    }

    let actionButtons: IActionButtonProps[] = [
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
            <RecepieTable />
        </Page>
    )
}
