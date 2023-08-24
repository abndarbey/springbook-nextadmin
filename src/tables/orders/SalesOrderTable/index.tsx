import { useState } from "react"
import {
    useSalesOrdersQuery,
    useSalesOrderArchiveMutation,
    useSalesOrderUnarchiveMutation,
    SalesOrder,
    SortByOption,
    SortDir,
    FilterOption,
    ViewOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { useRouter } from "next/router"
import SalesOrderTableHTML from "./SalesOrderTableHTML"

interface SalesOrderTableProps {
    view: ViewOption
    orgID?: string | null | undefined
    poID?: string | null | undefined
}

export default function SalesOrderTable(props: SalesOrderTableProps) {
    const router = useRouter()
    const viewType: string = props.view == ViewOption.Buyer ? 'procurements' : 'sales'

    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useSalesOrderArchiveMutation({})
    const [unarchiveRequest] = useSalesOrderUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useSalesOrdersQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Descending,
                    filter: filterValue,
                    orgID: props.orgID,
                    limit: 100,
                    offset: 0,
                },
                view: props.view,
                purchaseOrderID: props.poID
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
    const viewAction = (item: SalesOrder) => {
        router.push(`/${viewType}/sales-orders/${item.code}`)
    }
    const editAction = (item: SalesOrder) => {
        router.push(`/${viewType}/sales-orders/${item.code}/edit`)
    }

    const archiveAction = (item: SalesOrder) => {
        archiveRequest({
            variables: {uid: item.id!}
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

    const unarchiveAction = (item: SalesOrder) => {
        unarchiveRequest({
            variables: {uid: item.id!}
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

    // Batch Actions
    const batchViewAction = (selectedRecords: SalesOrder[]) => {
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
        <SalesOrderTableHTML
            data={data?.salesOrders!}
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
