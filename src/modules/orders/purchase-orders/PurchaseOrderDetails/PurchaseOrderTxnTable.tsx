import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

import {
    SortByOption,
    SortDir,
    FilterOption,
    useTransactionsQuery,
    Transaction,
    TransactionsResult,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { Badge, Box, Text } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { PAGE_SIZES } from "types/enums"
import moment from "moment"

type PurchaseOrderTxnTableHTMLProps = {
    data: TransactionsResult
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

type PurchaseOrderTxnTableProps = {
    uid: string | null | undefined
}

export default function PurchaseOrderTxnTable(props: PurchaseOrderTxnTableProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useTransactionsQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    limit: 100,
                    offset: 0,
                },
                objectUID: props.uid,
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

    // Batch Actions
    const batchViewAction = (selectedRecords: Transaction[]) => {
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
            <PurchaseOrderTxnTableHTML
                data={data?.transactions!}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Fragment>
    )
}

const PurchaseOrderTxnTableHTML = (props: PurchaseOrderTxnTableHTMLProps) => {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Transaction[]>(props.data?.transactions?.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Transaction[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data?.transactions.slice(from, to))
    }, [page, pageSize, props.data])

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
                        { accessor: "id", title: "ID" },
                        { accessor: "name", title: "Name" },
                        { accessor: "organization.name", title: "Organization" },
                        {
                            accessor: "isPending",
                            title: "Status",
                            render: (item) => (
                                <Badge color={item.isPending ? "blue" : "green"}>
                                    {item.isPending ? "Pending" : "Commited"}
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
                    ]}
                    selectedRecords={selectedRecords}
                    onSelectedRecordsChange={setSelectedRecords}
                    totalRecords={props.data?.total}
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
