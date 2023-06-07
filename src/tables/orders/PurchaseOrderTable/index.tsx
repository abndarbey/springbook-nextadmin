import { useState } from "react"
import {
    usePurchaseOrdersQuery,
    usePurchaseOrderArchiveMutation,
    usePurchaseOrderUnarchiveMutation,
    PurchaseOrder,
    SortByOption,
    SortDir,
    FilterOption,
    ViewOption
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { useRouter } from "next/router"
import PurchaseOrderTableHTML from "./PurchaseOrderTableHTML"

interface PurchaseOrderTableProps {
    view: ViewOption
    orgUID?: string | null | undefined
}

export default function PurchaseOrderTable(props: PurchaseOrderTableProps) {
    const router = useRouter()
    const viewType: string = props.view == ViewOption.Buyer ? 'procurements' : 'sales'

    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = usePurchaseOrderArchiveMutation({})
    const [unarchiveRequest] = usePurchaseOrderUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = usePurchaseOrdersQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgUID: props.orgUID,
                    limit: 100,
                    offset: 0,
                },
                view: props.view,
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

    // Row Actions
    const viewAction = (item: PurchaseOrder) => {
        router.push(`/${viewType}/purchase-orders/${item.code}`)
    }
    const editAction = (item: PurchaseOrder) => {
        router.push(`/${viewType}/purchase-orders/${item.code}/edit`)
    }

    const archiveAction = (item: PurchaseOrder) => {
        archiveRequest({
            variables: {uid: item.uid!}
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

    const unarchiveAction = (item: PurchaseOrder) => {
        unarchiveRequest({
            variables: {uid: item.uid!}
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

    // Batch Actions
    const batchViewAction = (selectedRecords: PurchaseOrder[]) => {
        selectedRecords.map((item, key) => {
            console.log(item.code)
        })
    }

    // Filter Actions
    const filterAction = (filter: string) => {
        if (filter === FilterOption.All) {
            setFilterValue(FilterOption.All)
        }
        if (filter === FilterOption.Active) {
            setFilterValue(FilterOption.Active)
        }
        if (filter === FilterOption.Draft) {
            setFilterValue(FilterOption.Draft)
        }
        if (filter === FilterOption.Archived) {
            setFilterValue(FilterOption.Archived)
        }
    }

    return (
        <PurchaseOrderTableHTML
            data={data?.purchaseOrders!}
            viewAction={viewAction}
            editAction={editAction}
            archiveAction={archiveAction}
            unarchiveAction={unarchiveAction}
            batchViewAction={batchViewAction}
            filterAction={filterAction}
            filterOptions={filterOptions}
        />
    )
}
