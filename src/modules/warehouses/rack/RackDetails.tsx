import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useRackQuery,
    useRackFinalizeMutation,
    useRackArchiveMutation,
    useRackUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'

interface IRackDetailsProps {
    code?: any
}

export default function RackDetails(props: IRackDetailsProps) {
    const router = useRouter()
    const [finalizeRequest] = useRackFinalizeMutation({})
    const [archiveRequest] = useRackArchiveMutation({})
    const [unarchiveRequest] = useRackUnarchiveMutation({})

    const title: string = `Rack Details`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Racks', href: '/warehouses/racks' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useRackQuery(
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

    // edit action
    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/warehouses/racks/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.rack.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.rackFinalize.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }
    console.log(data)
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.rack.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.rackArchive.name}`,
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
            variables: {id: data?.rack.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.rackUnarchive.name}`,
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
        { type: 'edit', name: 'Edit', action: handleEdit },
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: data?.rack.isFinal!},
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.rack.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.rack.isArchived! },
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
                        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Code' value={data?.rack.code!} />
                                <DetailRow title='Rows x Columns' value={data?.rack.rows! + ' x ' + data?.rack.columns!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Warehouse Code' value={data?.rack?.warehouse?.code!} />
                                <DetailRow title='Warehouse Name' value={data?.rack?.warehouse?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Organization Code' value={data?.rack?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.rack?.organization?.name!} />
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