import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    usePalletQuery,
    usePalletFinalizeMutation,
    usePalletArchiveMutation,
    usePalletUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'

interface IPalletDetailsProps {
    code?: any
}

export default function PalletDetails(props: IPalletDetailsProps) {
    const router = useRouter()
    const [finalizeRequest] = usePalletFinalizeMutation({})
    const [archiveRequest] = usePalletArchiveMutation({})
    const [unarchiveRequest] = usePalletUnarchiveMutation({})

    const title: string = `Pallet Details`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Pallets', href: '/warehouses/pallets' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = usePalletQuery(
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
        router.push(`/warehouses/pallets/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {uid: data?.pallet.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.palletFinalize.name}`,
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
            variables: {uid: data?.pallet.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.palletArchive.name}`,
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
            variables: {uid: data?.pallet.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.palletUnarchive.name}`,
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
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: data?.pallet.isFinal!},
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.pallet.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.pallet.isArchived! },
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
                                <DetailRow title='Code' value={data?.pallet.code!} />
                                <DetailRow title='Status' value={data?.pallet.status!} />
                                <DetailRow title='Allocation' value={data?.pallet.isAllocated! ? 'Allocated' : 'Available'} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Warehouse Code' value={data?.pallet?.warehouse?.code!} />
                                <DetailRow title='Warehouse Name' value={data?.pallet?.warehouse?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Organization Code' value={data?.pallet?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.pallet?.organization?.name!} />
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