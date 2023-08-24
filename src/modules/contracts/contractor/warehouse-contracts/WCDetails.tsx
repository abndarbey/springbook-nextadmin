import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs, Badge } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useWarehouseContractQuery,
    useWarehouseContractFinalizeMutation,
    useWarehouseContractArchiveMutation,
    useWarehouseContractUnarchiveMutation,
    useWarehouseContractAcceptMutation,
    useAutherQuery,
} from 'gql/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailColumn from 'components/DetailColumn'
import { PageProps } from 'types/types'


export default function WarehouseContractDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useWarehouseContractFinalizeMutation({})
    const [acceptRequest] = useWarehouseContractAcceptMutation({})
    const [archiveRequest] = useWarehouseContractArchiveMutation({})
    const [unarchiveRequest] = useWarehouseContractUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Warehouse Contracts', href: '/contracts/contractor/warehouse-contracts' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const objectData = useWarehouseContractQuery({ variables: { code: props.code } })
    if (objectData.loading) {
        return (
            <PageLoader />
        )
    }
    if (objectData.error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: objectData.error.message,
        })
        return <PageLoader isError={true} />
    }

    // edit action
    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/contracts/contractor/warehouse-contracts/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: objectData.data?.warehouseContract.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.warehouseContractFinalize.code}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }
    
    // accept action
    const handleAccept = (e: any) => {
        e.preventDefault()
        acceptRequest({
            variables: {id: objectData.data?.warehouseContract.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Accepted - ${res.data.warehouseContractAccept.code}`,
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
            variables: {id: objectData.data?.warehouseContract.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.warehouseContractArchive.code}`,
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
            variables: {id: objectData.data?.warehouseContract.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.warehouseContractUnarchive.code}`,
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
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: objectData.data?.warehouseContract.isFinal! },
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: objectData.data?.warehouseContract.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !objectData.data?.warehouseContract.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="roles">Roles</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <ContentCard mb="sm">
                        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Code' value={objectData.data?.warehouseContract.code!} />
                                <DetailColumn title='Status' value={<Badge>{objectData.data?.warehouseContract.status!}</Badge>} />
                                <DetailColumn title='Acceptance Status' value={<Badge>{objectData.data?.warehouseContract.acceptanceStatus!}</Badge>} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Contractor Code' value={objectData.data?.warehouseContract?.contractor?.code!} />
                                <DetailColumn title='Contractor Name' value={objectData.data?.warehouseContract?.contractor?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Client Code' value={objectData.data?.warehouseContract?.client?.code!} />
                                <DetailColumn title='Client Name' value={objectData.data?.warehouseContract?.client?.name!} />
                            </Box>
                        </SimpleGrid>
                    </ContentCard>
                    <ContentCard mb="sm">
                        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailColumn title='Warehouse Code' value={objectData.data?.warehouseContract?.warehouse?.code!} />
                                <DetailColumn title='Warehouse Name' value={objectData.data?.warehouseContract?.warehouse?.name!} />
                                <DetailColumn title='Warehouse ID' value={objectData.data?.warehouseContract?.warehouse?.id!} />
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