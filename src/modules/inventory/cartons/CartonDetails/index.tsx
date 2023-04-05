import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useCartonQuery,
    useCartonArchiveMutation,
    useCartonUnarchiveMutation,
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import CartonDetailsHTML from "./CartonDetailsHTML"
import BatchTable from "tables/inventory/BatchTable"

export default function CartonDetails(props: PageProps) {
    const router = useRouter()
    const [archiveRequest] = useCartonArchiveMutation({})
    const [unarchiveRequest] = useCartonUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "SKUs", href: "/inventory/cartons" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useCartonQuery(
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
        router.push(`/inventory/cartons/${props.code}/edit`)
    }
    
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.carton.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.cartonArchive.name}`,
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
            variables: {id: data?.carton.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.cartonUnarchive.name}`,
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
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.carton.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.carton.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="qr">QR</Tabs.Tab>
                    <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
                    <Tabs.Tab value="trackers">Trackers</Tabs.Tab>
                    <Tabs.Tab value="history">History</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <CartonDetailsHTML data={data?.carton!} />
                </Tabs.Panel>

                <Tabs.Panel value="qr" pt="xs">
                    <h1>Carton QR</h1>
                </Tabs.Panel>

                <Tabs.Panel value="transactions" pt="xs">
                    <h1>Carton Transactions</h1>
                </Tabs.Panel>

                <Tabs.Panel value="trackers" pt="xs">
                    <h1>All trackers will be shown here</h1>
                </Tabs.Panel>
                
                <Tabs.Panel value="history" pt="xs">
                    <h1>All Ownership and Custodianship history will be shown here</h1>
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}