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
    usePurchaseOrderSellerAcceptMutation,
    ViewOption,
    useSalesOrderCreateMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import PurchaseOrderDetailsHTML from "./PurchaseOrderDetailsHTML"
import PurchaseOrderItemTable from "./PurchaseOrderItemTable"
import PurchaseOrderAdditionalDetailsHTML from "./PurchaseOrderAdditionalDetailsHTML"
import PurchaseOrderTermsHTML from "./PurchaseOrderTermsHTML"
import PurchaseOrderHistoryTable from "./PurchaseOrderHistoryTable"
import { boolean } from "yup"
import PurchaseOrderTxnTable from "./PurchaseOrderTxnTable"
import SalesOrderTable from "tables/orders/SalesOrderTable"

export default function PurchaseOrderDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = usePurchaseOrderFinalizeMutation({})
    const [archiveRequest] = usePurchaseOrderArchiveMutation({})
    const [unarchiveRequest] = usePurchaseOrderUnarchiveMutation({})
    const [sellerAcceptRequest] = usePurchaseOrderSellerAcceptMutation({})
    const [soCreateRequest] = useSalesOrderCreateMutation({})
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
            variables: {uid: data?.purchaseOrder.id!}
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
            variables: {uid: data?.purchaseOrder.id!}
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
            variables: {uid: data?.purchaseOrder.id!}
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
    
    // seller accept action
    const handleSellerAccept = (e: any) => {
        e.preventDefault()
        sellerAcceptRequest({
            variables: {uid: data?.purchaseOrder.id!, acceptance: true}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Seller Acceptd - ${res.data.purchaseOrderSellerAccept.code}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }
    
    // seller decline action
    const handleSellerDecline = (e: any) => {
        e.preventDefault()
        sellerAcceptRequest({
            variables: {uid: data?.purchaseOrder.id!, acceptance: false}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Seller Declined - ${res.data.purchaseOrderSellerAccept.code}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    // sales order create action
    const handleSOCreate = (e: any) => {
        e.preventDefault()
        soCreateRequest({
            variables: {
                input: {
                    purchaseOrderID: data?.purchaseOrder.id!,
                    sellerID: data?.purchaseOrder.seller?.id!,
                }
            }
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Purchase Order ${res.data.salesOrderCreate.code} Created`,
            })
            router.push(`/sales/sales-orders/${res.data.salesOrderCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    // define action buttons
    let actionButtons: IActionButtonProps[] = []

    const buyerActionButtons: IActionButtonProps[] = [
        { type: "edit", name: "Edit", action: handleEdit },
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.purchaseOrder.isFinal!},
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.purchaseOrder.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.purchaseOrder.isArchived! },
    ]

    const sellerActionButtons: IActionButtonProps[] = [
        { type: "accept", name: "Accept", action: handleSellerAccept, disabled: data?.purchaseOrder?.details?.isSellerAccepted != null },
        { type: "decline", name: "Decline", action: handleSellerDecline, disabled: data?.purchaseOrder?.details?.isSellerAccepted != null },
        { type: "create", name: "Create Sales Order", action: handleSOCreate, disabled: data?.purchaseOrder?.details?.isSellerAccepted == null || data?.purchaseOrder?.details?.isSellerAccepted == false },
    ]

    if (props.view == ViewOption.Buyer) {
        actionButtons = buyerActionButtons
    }
    if (props.view == ViewOption.Seller) {
        actionButtons = sellerActionButtons
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="history">History</Tabs.Tab>
                    <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
                    <Tabs.Tab value="sales-orders">Sales Orders</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <PurchaseOrderDetailsHTML mb="md" data={data?.purchaseOrder!} />
                    <PurchaseOrderItemTable mb="md" items={data?.purchaseOrder?.items!} />
                    <PurchaseOrderAdditionalDetailsHTML mb="md" data={data?.purchaseOrder?.details!} />
                    <PurchaseOrderTermsHTML mb="md" data={data?.purchaseOrder?.details!} />
                </Tabs.Panel>

                <Tabs.Panel value="history" pt="xs">
                    <PurchaseOrderHistoryTable poID={data?.purchaseOrder.id}/>
                </Tabs.Panel>

                <Tabs.Panel value="transactions" pt="xs">
                    <PurchaseOrderTxnTable uid={data?.purchaseOrder.id}/>
                </Tabs.Panel>

                <Tabs.Panel value="sales-orders" pt="xs">
                    <SalesOrderTable view={props.view!} poID={data?.purchaseOrder.id}/>
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}