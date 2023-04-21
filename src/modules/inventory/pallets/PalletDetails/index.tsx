import { useRouter } from "next/router"
import { Tabs, Text } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    usePalletQuery,
    usePalletArchiveMutation,
    usePalletUnarchiveMutation,
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import PalletDetailsHTML from "./PalletDetailsHTML"
import PalletTransferTable from "./PalletTransferTable"
import PalletTrackerTable from "./PalletTrackerTable"
import PalletTxnTable from "./PalletTxnTable"
import TransactionTable from "tables/transactions/TransactionTable"

export default function PalletDetails(props: PageProps) {
    const router = useRouter()
    const [archiveRequest] = usePalletArchiveMutation({})
    const [unarchiveRequest] = usePalletUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Pallets", href: "/inventory/pallets" },
        { title: props.code, href: "#" },
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
            color: "red",
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    // edit action
    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/inventory/pallets/${props.code}/edit`)
    }
    
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.pallet.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.palletArchive.name}`,
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
            variables: {id: data?.pallet.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.palletUnarchive.name}`,
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
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.pallet.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.pallet.isArchived! },
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
                    <PalletDetailsHTML data={data?.pallet!} />
                </Tabs.Panel>

                <Tabs.Panel value="transactions" pt="xs">
                    <TransactionTable objectUID={data?.pallet.uid} />
                </Tabs.Panel>

                <Tabs.Panel value="trackers" pt="xs">
                    <PalletTrackerTable palletUID={data?.pallet.uid} />
                </Tabs.Panel>
                
                <Tabs.Panel value="history" pt="xs">
                    <PalletTransferTable palletUID={data?.pallet.uid} />
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}