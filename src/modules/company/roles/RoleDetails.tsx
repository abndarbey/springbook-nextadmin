import { useRouter } from 'next/router'
import { SimpleGrid, Box, Tabs } from '@mantine/core'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useRoleQuery,
    useRoleFinalizeMutation,
    useRoleArchiveMutation,
    useRoleUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailRow from 'components/DetailRow'

interface IRoleDetailsProps {
    code?: any
}

export default function RoleDetails(props: IRoleDetailsProps) {
    const router = useRouter()
    const [finalizeRequest] = useRoleFinalizeMutation({})
    const [archiveRequest] = useRoleArchiveMutation({})
    const [unarchiveRequest] = useRoleUnarchiveMutation({})

    const title: string = `Role: ${props.code}`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Roles', href: '/company/roles' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useRoleQuery(
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
        router.push(`/company/roles/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.role.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.roleFinalize.name}`,
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
            variables: {id: data?.role.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.roleArchive.name}`,
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
            variables: {id: data?.role.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.roleUnarchive.name}`,
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
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: data?.role.isFinal!},
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.role.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.role.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={title} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="users">Roles</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <ContentCard>
                        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Code' value={data?.role.code!} />
                                <DetailRow title='Name' value={data?.role.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Department Code' value={data?.role?.department?.code!} />
                                <DetailRow title='Department Name' value={data?.role?.department?.name!} />
                            </Box>
                            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                                <DetailRow title='Organization Code' value={data?.role?.organization?.code!} />
                                <DetailRow title='Organization Name' value={data?.role?.organization?.name!} />
                            </Box>
                        </SimpleGrid>
                    </ContentCard>
                </Tabs.Panel>

                <Tabs.Panel value="users" pt="xs">
                    Users tab content
                </Tabs.Panel>
            </Tabs> 
        </Page>
    )
}