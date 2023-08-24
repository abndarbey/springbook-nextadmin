import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

import {
    useSalesOrderHistoryQuery,
    SalesOrderDetail,
    SalesOrderHistoryResult,
    SortByOption,
    SortDir,
    FilterOption,
    useSalesOrderVersionHashVerifyMutation
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { Badge, Box, Text } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { PAGE_SIZES } from "types/enums"
import moment from "moment"
import TableRowActions from "components/TableWrapper/TableRowActions"

interface SalesOrderHistoryTableHTMLProps {
    data: SalesOrderHistoryResult
    verifyAction: (item: SalesOrderDetail) => void
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

interface SalesOrderHistoryTableProps {
    soID: any
}

export default function SalesOrderHistoryTable(props: SalesOrderHistoryTableProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [verifyDocumentHashRequest] = useSalesOrderVersionHashVerifyMutation()

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useSalesOrderHistoryQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Descending,
                    filter: filterValue,
                    limit: 100,
                    offset: 0,
                },
                soID: props.soID,
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
    const batchViewAction = (selectedRecords: SalesOrderDetail[]) => {
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

    const verifyDocumentHash = (item: SalesOrderDetail) => {
        verifyDocumentHashRequest({
            variables: {versionID: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Verified`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    return (
        <Fragment>
            <SalesOrderHistoryTableHTML
                data={data?.salesOrderHistory!}
                verifyAction={verifyDocumentHash}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Fragment>
    )
}

const SalesOrderHistoryTableHTML = (props: SalesOrderHistoryTableHTMLProps) => {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<SalesOrderDetail[]>(props.data.salesOrderHistory.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<SalesOrderDetail[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.salesOrderHistory.slice(from, to))
    }, [page, pageSize, props.data.salesOrderHistory])

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
                                    verifyAction={props.verifyAction}
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
