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
    useWarehouseContractDeclineMutation,
} from 'gql/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import DetailColumn from 'components/DetailColumn'
import { PageProps } from 'types/types'


export default function WarehouseContractDetails(props: PageProps) {
    const router = useRouter()
    const [acceptRequest] = useWarehouseContractAcceptMutation({})
    const [declineRequest] = useWarehouseContractDeclineMutation({})

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Warehouse Contracts', href: '/contracts/client/warehouse-contracts' },
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
    
    // accept action
    const handleAccept = (e: any) => {
        e.preventDefault()
        acceptRequest({
            variables: {uid: objectData.data?.warehouseContract.uid!}
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


    
    // decline action
    const handleDecline = (e: any) => {
        e.preventDefault()
        declineRequest({
            variables: {uid: objectData.data?.warehouseContract.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Declined - ${res.data.warehouseContractDecline.code}`,
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
        {
            type: 'accept',
            name: 'Accept',
            action: handleAccept,
            disabled: objectData.data?.warehouseContract.isAccepted!
                    || !objectData.data?.warehouseContract.isFinal!
                    || objectData.data?.warehouseContract.acceptanceStatus === 'DECLINED',
        },
        {
            type: 'decline',
            name: 'Decline',
            action: handleDecline,
            disabled: objectData.data?.warehouseContract.isAccepted!
                    || !objectData.data?.warehouseContract.isFinal!
                    || objectData.data?.warehouseContract.acceptanceStatus === 'DECLINED',
        },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="warehouse">Roles</Tabs.Tab>
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
                                <DetailColumn title='Warehouse UID' value={objectData.data?.warehouseContract?.warehouse?.uid!} />
                            </Box>
                        </SimpleGrid>
                    </ContentCard>
                </Tabs.Panel>

                <Tabs.Panel value="warehouse" pt="xs">
                    Warehouse tab content
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}