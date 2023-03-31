import { useRouter } from 'next/router'
import {Tabs} from '@mantine/core'

import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useBatchCatalogueQuery,
    useBatchCatalogueFinalizeMutation,
    useBatchCatalogueArchiveMutation,
    useBatchCatalogueUnarchiveMutation,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import { PageProps } from 'types/types'

export default function BatchCatalogueDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useBatchCatalogueFinalizeMutation({})
    const [archiveRequest] = useBatchCatalogueArchiveMutation({})
    const [unarchiveRequest] = useBatchCatalogueUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Batch Catalogues', href: '/catalogues/batches' },
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

    // edit action
    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/catalogues/batches/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {uid: data?.batchCatalogue.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Finalized - ${res.data.batchCatalogueFinalize.name}`,
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
            variables: {uid: data?.batchCatalogue.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.batchCatalogueArchive.name}`,
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
            variables: {uid: data?.batchCatalogue.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.batchCatalogueUnarchive.name}`,
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
        { type: 'finalize', name: 'Finalize', action: handleFinalize, disabled: data?.batchCatalogue.isFinal!},
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: data?.batchCatalogue.isArchived! },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: !data?.batchCatalogue.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="batches">Batches</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                </Tabs.Panel>

                <Tabs.Panel value="batches" pt="xs">
                    Batches tab content
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}