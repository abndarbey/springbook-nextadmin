import { INavTrailProps } from 'components/NavTrails'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import { useRouter } from 'next/router'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import UserTable from 'tables/company/UserTable'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Users', href: '#' },
]

export default function UserList() {
    const router = useRouter()

    const handleNew = () => {
        router.push('/company/users/new')
    }

    const actionButtons: IActionButtonProps[] = [
        {
            type: 'new',
            name: 'New',
            disabled: false,
            action: handleNew,
        }
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='Users' buttons={actionButtons} />
            <UserTable />
        </Page>
    )
}
