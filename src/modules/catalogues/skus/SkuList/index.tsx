import { INavTrailProps } from 'components/NavTrails'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import { useRouter } from 'next/router'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import { PageProps } from 'types/types'
import SkuCatTable from 'tables/SkuCatTable'


const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Sku Catalogues', href: '#' },
]

export default function SkuCatalogueList(props: PageProps) {
    const router = useRouter()

    const handleNew = () => {
        router.push('/catalogues/skus/new')
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
            <PageHeader title={props.title!} buttons={actionButtons} />
            <SkuCatTable/>
        </Page>
    )
}
