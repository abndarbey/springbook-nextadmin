import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useSalesOrderQuery,
    useSalesOrderFinalizeMutation,
    useSalesOrderArchiveMutation,
    useSalesOrderUnarchiveMutation,
    ViewOption,
    useSalesOrderCreateMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import SalesOrderDetailsHTML from "./SalesOrderDetailsHTML"
import SalesOrderItemTable from "./SalesOrderItemTable"
import SalesOrderAdditionalDetailsHTML from "./SalesOrderAdditionalDetailsHTML"
import SalesOrderTermsHTML from "./SalesOrderTermsHTML"
import SalesOrderHistoryTable from "./SalesOrderHistoryTable"
import SalesOrderTxnTable from "./SalesOrderTxnTable"

export default function SalesOrderDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useSalesOrderFinalizeMutation({})
    const [archiveRequest] = useSalesOrderArchiveMutation({})
    const [unarchiveRequest] = useSalesOrderUnarchiveMutation({})
    const [soCreateRequest] = useSalesOrderCreateMutation({})
    const viewType: string = props.view == ViewOption.Buyer ? 'procurements' : 'sales'

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Sales Orders", href: `/${viewType}/sales-orders` },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useSalesOrderQuery(
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
        router.push(`/company/sales-orders/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {uid: data?.salesOrder.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Finalized - ${res.data.salesOrderFinalize.code}`,
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
            variables: {uid: data?.salesOrder.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.salesOrderArchive.code}`,
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
            variables: {uid: data?.salesOrder.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.salesOrderUnarchive.code}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    // // sales order create action
    // const handleSOCreate = (e: any) => {
    //     e.preventDefault()
    //     soCreateRequest({
    //         variables: {
    //             input: {
    //                 salesOrderID: data?.salesOrder.id!,
    //                 sellerID: data?.salesOrder.seller?.id!,
    //             }
    //         }
    //     }).then((res: any) => {
    //         showNotification({
    //             disallowClose: false,
    //             color: "green",
    //             message: `Sales Order ${res.data.salesOrderCreate.code} Created`,
    //         })
    //         router.push(`/sales/sales-orders/${res.data.salesOrderCreate.code}`)
    //     }).catch((error: any) => {
    //         showNotification({
    //             disallowClose: false,
    //             color: "red",
    //             message: error.message,
    //         })
    //     })
    // }

    // define action buttons
    let actionButtons: IActionButtonProps[] = []

    const sellerActionButtons: IActionButtonProps[] = [
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.salesOrder.isFinal!},
        // { type: "create", name: "Create Sales Order", action: handleSOCreate, disabled: data?.salesOrder?.details?.isSellerAccepted == null || data?.salesOrder?.details?.isSellerAccepted == false },
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.salesOrder.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.salesOrder.isArchived! },
    ]
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
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <SalesOrderDetailsHTML mb="md" data={data?.salesOrder!} />
                    <SalesOrderItemTable mb="md" items={data?.salesOrder?.items!} />
                    <SalesOrderAdditionalDetailsHTML mb="md" data={data?.salesOrder?.details!} />
                    <SalesOrderTermsHTML mb="md" data={data?.salesOrder?.details!} />
                </Tabs.Panel>

                <Tabs.Panel value="history" pt="xs">
                    <SalesOrderHistoryTable soID={data?.salesOrder.id}/>
                </Tabs.Panel>

                <Tabs.Panel value="transactions" pt="xs">
                    <SalesOrderTxnTable uid={data?.salesOrder.id}/>
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}