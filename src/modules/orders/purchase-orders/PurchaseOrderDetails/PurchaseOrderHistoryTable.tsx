import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

import {
    usePurchaseOrderHistoryQuery,
    PurchaseOrderDetail,
    PurchaseOrderHistoryResult,
    SortByOption,
    SortDir,
    FilterOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { PAGE_SIZES } from "types/enums"
import moment from "moment"
import TableRowActions from "components/TableWrapper/TableRowActions"

interface PurchaseOrderHistoryTableHTMLProps {
    data: PurchaseOrderHistoryResult
    viewAction: (item: PurchaseOrderDetail) => void
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

interface PurchaseOrderHistoryTableProps {
    poUID: any
}

export default function PurchaseOrderHistoryTable(props: PurchaseOrderHistoryTableProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = usePurchaseOrderHistoryQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Descending,
                    filter: filterValue,
                    limit: 100,
                    offset: 0,
                },
                poUID: props.poUID,
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

    const viewAction = (item: PurchaseOrderDetail) => {
        // router.push(`/inventory/cartons/${item.version}`)
        console.log("Show datahash in modal")
    }

    // Batch Actions
    const batchViewAction = (selectedRecords: PurchaseOrderDetail[]) => {
        selectedRecords.map((item, key) => {
            console.log(item.id)
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
        <Fragment>
            <PurchaseOrderHistoryTableHTML
                data={data?.purchaseOrderHistory!}
                viewAction={viewAction}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Fragment>
    )
}

const PurchaseOrderHistoryTableHTML = (props: PurchaseOrderHistoryTableHTMLProps) => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<PurchaseOrderDetail[]>(props.data.purchaseOrderHistory.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<PurchaseOrderDetail[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.purchaseOrderHistory.slice(from, to))
    }, [page, pageSize, props.data.purchaseOrderHistory])

    return (
        <ContentCard>
            <TableActionBar
                selectedRecords={selectedRecords}
                showActionButton={true}
                batchViewAction={props.batchViewAction}
                filterAction={props.filterAction}
                filterOptions={props.filterOptions}
            />
            <Box>
                <DataTable
                    minHeight={300}
                    verticalSpacing="md"
                    horizontalSpacing="sm"
                    highlightOnHover
                    noRecordsText="No records to show"
                    records={records}
                    columns={[
                        { accessor: "version" },
                        { accessor: "currency" },
                        { accessor: "incoterm" },
                        { accessor: "shippingMethod", title: "Shipping Method" },
                        {
                            accessor: "sellerAcceptedStatus",
                            title: "Seller Acceptance Status",
                            render: (item) => (
                                <Badge color={item.isSellerAccepted ? "blue" : "gray"}>
                                    {item.sellerAcceptedStatus}
                                </Badge>
                            )
                        },
                        {
                            accessor: "financierApprovedStatus",
                            title: "Financier Acceptance Status",
                            render: (item) => (
                                <Badge color={item.isFinancierApproved ? "blue" : "gray"}>
                                    {item.financierApprovedStatus}
                                </Badge>
                            )
                        },
                        {
                            accessor: "createdAt", title: "Timestamp",
                            render: (item) => (
                                <Text>{moment(item.createdAt).format('Do MMMM YYYY, h:mm:ss a')}</Text>
                            )
                        },
                        {
                            accessor: "createdAt", title: "Relative Time",
                            render: (item) => (
                                <Text>{moment(item.createdAt, "YYYYMMDD").fromNow()}</Text>
                            )
                        },
                        {
                            accessor: "actions",
                            title: <Text mr="xs">Actions</Text>,
                            textAlignment: "center",
                            render: (item) => (
                                <TableRowActions
                                    item={item}
                                    viewAction={props.viewAction}
                                />
                            )
                        },
                    ]}
                    selectedRecords={selectedRecords}
                    onSelectedRecordsChange={setSelectedRecords}
                    totalRecords={props.data.total}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPage={pageSize}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    recordsPerPageLabel="Rows Per Page"
                />
            </Box>
        </ContentCard>
    )
}
