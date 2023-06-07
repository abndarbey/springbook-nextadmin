import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    usePurchaseOrderQuery,
    usePurchaseOrderFinalizeMutation,
    usePurchaseOrderArchiveMutation,
    usePurchaseOrderUnarchiveMutation,
    ViewOption,
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import PurchaseOrderDetailsHTML from "./PurchaseOrderDetailsHTML"

export default function PurchaseOrderDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = usePurchaseOrderFinalizeMutation({})
    const [archiveRequest] = usePurchaseOrderArchiveMutation({})
    const [unarchiveRequest] = usePurchaseOrderUnarchiveMutation({})
    const viewType: string = props.view == ViewOption.Buyer ? 'procurements' : 'sales'

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Purchase Orders", href: `/${viewType}/purchase-orders` },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = usePurchaseOrderQuery(
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
        router.push(`/company/purchase-orders/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {uid: data?.purchaseOrder.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Finalized - ${res.data.purchaseOrderFinalize.code}`,
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
            variables: {uid: data?.purchaseOrder.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.purchaseOrderArchive.code}`,
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
            variables: {uid: data?.purchaseOrder.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.purchaseOrderUnarchive.code}`,
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
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.purchaseOrder.isFinal!},
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.purchaseOrder.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.purchaseOrder.isArchived! },
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
                    <PurchaseOrderDetailsHTML data={data?.purchaseOrder!} />
                </Tabs.Panel>

                {/* <Tabs.Panel value="roles" pt="xs">
                    <RoleTable purchaseOrderUID={data?.purchaseOrder.uid} />
                </Tabs.Panel> */}
            </Tabs>
        </Page>
    )
}