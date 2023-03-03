import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs, Badge } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { useBatchCatalogueQuery } from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'
import { PageProps } from 'types/types'

export default function BatchCatalogueDetails(props: PageProps) {
    const router = useRouter()

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Nexport', href: '#' },
        { title: 'Batch Catalogues', href: '/nexport/batches' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useBatchCatalogueQuery(
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
                                <DetailRow title='Code' value={data?.batchCatalogue.code!} />
                                <DetailRow title='Name' value={data?.batchCatalogue.batchNumber!} />
                                <DetailRow title='Brand' value={data?.batchCatalogue.sku?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Organization Code' value={data?.batchCatalogue?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.batchCatalogue?.organization?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Status' value={<Badge>{data?.batchCatalogue?.status!}</Badge>} />
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