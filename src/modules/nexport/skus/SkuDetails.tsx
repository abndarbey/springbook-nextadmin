import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs, Badge } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { useSkuCatalogueQuery } from 'gql/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailColumn from 'components/DetailColumn'
import { PageProps } from 'types/types'

export default function SkuCatalogueDetails(props: PageProps) {
    const router = useRouter()

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Nexport', href: '#' },
        { title: 'Sku Catalogues', href: '/nexport/skus' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useSkuCatalogueQuery(
        {
            variables: {
                code: props.code,
            }
        }
    )
    if (loading) {
        return (
            <PageLoader />
        )
    }
    if (!loading && error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="batches">Batches</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <ContentCard>
                        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Code' value={data?.skuCatalogue.code!} />
                                <DetailColumn title='Name' value={data?.skuCatalogue.name!} />
                                <DetailColumn title='Brand' value={data?.skuCatalogue.brand!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Organization Code' value={data?.skuCatalogue?.organization?.code!} />
                                <DetailColumn title='Organization Name' value={data?.skuCatalogue?.organization?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Status' value={<Badge>{data?.skuCatalogue?.status!}</Badge>} />
                            </Box>
                        </SimpleGrid>
                    </ContentCard>
                </Tabs.Panel>

                <Tabs.Panel value="batches" pt="xs">
                    Batches tab content
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}