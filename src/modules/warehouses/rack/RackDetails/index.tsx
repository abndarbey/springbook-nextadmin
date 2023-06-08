import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useRackQuery,
    useRackFinalizeMutation,
    useRackArchiveMutation,
    useRackUnarchiveMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import RackDetailsHTML from "./RackDetailsHTML"
import CellTable from "tables/warehouses/CellTable"

export default function RackDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useRackFinalizeMutation({})
    const [archiveRequest] = useRackArchiveMutation({})
    const [unarchiveRequest] = useRackUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Racks", href: "/warehouses/racks" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useRackQuery(
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
        router.push(`/warehouses/racks/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.rack.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Finalized - ${res.data.rackFinalize.code}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }
    
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.rack.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.rackArchive.code}`,
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
            variables: {id: data?.rack.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.rackUnarchive.code}`,
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
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.rack.isFinal!},
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.rack.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.rack.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="cells">Cells</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <RackDetailsHTML data={data?.rack!} />
                </Tabs.Panel>

                <Tabs.Panel value="cells" pt="xs">
                    <CellTable rackID={data?.rack.id} />
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}