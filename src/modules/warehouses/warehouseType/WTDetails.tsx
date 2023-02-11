import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useWarehouseTypeQuery,
    useWarehouseTypeFinalizeMutation,
    useWarehouseTypeArchiveMutation,
    useWarehouseTypeUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'

interface IWarehouseTypeDetailsProps {
    code?: any
}

export default function WarehouseTypeDetails(props: IWarehouseTypeDetailsProps) {
    const router = useRouter()
    const [finalizeRequest] = useWarehouseTypeFinalizeMutation({})
    const [archiveRequest] = useWarehouseTypeArchiveMutation({})
    const [unarchiveRequest] = useWarehouseTypeUnarchiveMutation({})

    const title: string = `WarehouseType: ${props.code}`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'WarehouseTypes', href: '/warehouses/warehouse-types' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useWarehouseTypeQuery(
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
        router.push(`/warehouses/warehouse-types/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.warehouseType.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.warehouseTypeFinalize.name}`,
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
            variables: {id: data?.warehouseType.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.warehouseTypeArchive.name}`,
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
            variables: {id: data?.warehouseType.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.warehouseTypeUnarchive.name}`,
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
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: data?.warehouseType.isFinal!},
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.warehouseType.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.warehouseType.isArchived! },
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
                        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box
                                sx={(theme) => ({
                                    // padding: theme.spacing.xl,
                                    borderRadius: theme.radius.md,
                                })}
                            >
                                <DetailRow title='Code' value={data?.warehouseType.code!} />
                                <DetailRow title='Name' value={data?.warehouseType.name!} />
                            </Box>
                            <Box
                                sx={(theme) => ({
                                    // padding: theme.spacing.xl,
                                    borderRadius: theme.radius.md,
                                })}
                            >
                                <DetailRow title='Organization Code' value={data?.warehouseType?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.warehouseType?.organization?.name!} />
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