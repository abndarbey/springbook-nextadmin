import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    usePalletTypeQuery,
    usePalletTypeFinalizeMutation,
    usePalletTypeArchiveMutation,
    usePalletTypeUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'

interface IPalletTypeDetailsProps {
    code?: any
}

export default function PalletTypeDetails(props: IPalletTypeDetailsProps) {
    const router = useRouter()
    const [finalizeRequest] = usePalletTypeFinalizeMutation({})
    const [archiveRequest] = usePalletTypeArchiveMutation({})
    const [unarchiveRequest] = usePalletTypeUnarchiveMutation({})

    const title: string = `PalletType: ${props.code}`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'PalletTypes', href: '/warehouses/pallet-types' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = usePalletTypeQuery(
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
        router.push(`/warehouses/pallet-types/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.palletType.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.palletTypeFinalize.name}`,
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
            variables: {id: data?.palletType.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.palletTypeArchive.name}`,
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
            variables: {id: data?.palletType.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.palletTypeUnarchive.name}`,
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
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: data?.palletType.isFinal!},
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.palletType.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.palletType.isArchived! },
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
                                <DetailRow title='Code' value={data?.palletType.code!} />
                                <DetailRow title='Name' value={data?.palletType.name!} />
                            </Box>
                            <Box
                                sx={(theme) => ({
                                    // padding: theme.spacing.xl,
                                    borderRadius: theme.radius.md,
                                })}
                            >
                                <DetailRow title='Organization Code' value={data?.palletType?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.palletType?.organization?.name!} />
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