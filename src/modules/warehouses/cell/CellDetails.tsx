import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useCellQuery,
    useCellFinalizeMutation,
    useCellArchiveMutation,
    useCellUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'
import { PageProps } from 'types/types'

export default function CellDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useCellFinalizeMutation({})
    const [archiveRequest] = useCellArchiveMutation({})
    const [unarchiveRequest] = useCellUnarchiveMutation({})

    const title: string = `Cell Details`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Cells', href: '/warehouses/cells' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useCellQuery(
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

    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.cell.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.cellFinalize.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.cell.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.cellArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }
    
    // unarchive action
    const handleUnarchive = (e: any) => {
        e.preventDefault()
        unarchiveRequest({
            variables: {id: data?.cell.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.cellUnarchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    // define action buttons
    const actionButtons: IActionButtonProps[] = [
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.cell.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.cell.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={title} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="roles">Roles</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <ContentCard>
                        <SimpleGrid cols={4} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Cell Code' value={data?.cell.code!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Rack Code' value={data?.cell?.rack?.code!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Warehouse Code' value={data?.cell?.warehouse?.code!} />
                                <DetailRow title='Warehouse Name' value={data?.cell?.warehouse?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Organization Code' value={data?.cell?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.cell?.organization?.name!} />
                            </Box>
                        </SimpleGrid>
                    </ContentCard>
                </Tabs.Panel>

                <Tabs.Panel value="roles" pt="xs">
                    Roles tab content
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}