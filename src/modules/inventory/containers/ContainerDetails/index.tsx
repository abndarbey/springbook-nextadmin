import { useRouter } from "next/router"
import { Tabs, Text } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useContainerQuery,
    useContainerArchiveMutation,
    useContainerUnarchiveMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import ContainerDetailsHTML from "./ContainerDetailsHTML"
import ContainerTransferTable from "./ContainerTransferTable"
import ContainerTrackerTable from "./ContainerTrackerTable"
import ContainerTxnTable from "./ContainerTxnTable"
import TransactionTable from "tables/transactions/TransactionTable"

export default function ContainerDetails(props: PageProps) {
    const router = useRouter()
    const [archiveRequest] = useContainerArchiveMutation({})
    const [unarchiveRequest] = useContainerUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Containers", href: "/inventory/containers" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useContainerQuery(
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
            color: "red",
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    // edit action
    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/inventory/containers/${props.code}/edit`)
    }
    
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.container.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.containerArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }
    
    // unarchive action
    const handleUnarchive = (e: any) => {
        e.preventDefault()
        unarchiveRequest({
            variables: {id: data?.container.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.containerUnarchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    // define action buttons
    const actionButtons: IActionButtonProps[] = [
        { type: "edit", name: "Edit", action: handleEdit },
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.container.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.container.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
                    <Tabs.Tab value="trackers">Trackers</Tabs.Tab>
                    <Tabs.Tab value="history">History</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <ContainerDetailsHTML data={data?.container!} />
                </Tabs.Panel>

                <Tabs.Panel value="transactions" pt="xs">
                    <TransactionTable objectID={data?.container.id} />
                </Tabs.Panel>

                <Tabs.Panel value="trackers" pt="xs">
                    <ContainerTrackerTable containerID={data?.container.id} />
                </Tabs.Panel>
                
                <Tabs.Panel value="history" pt="xs">
                    <ContainerTransferTable containerID={data?.container.id} />
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}