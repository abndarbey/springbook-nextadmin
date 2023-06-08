import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

import {
    useQrOrderObjectsQuery,
    QrOrderObject,
    QrOrderObjectsResult,
    SortByOption,
    SortDir,
    FilterOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { Box, Text } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { PAGE_SIZES } from "types/enums"
import moment from "moment"

interface QrOrderObjectTableHTMLProps {
    qrOrderUID: string
    data: QrOrderObjectsResult
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

interface QrOrderObjectTableProps {
    qrOrderUID: string
}

export default function QrOrderObjectTable(props: QrOrderObjectTableProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useQrOrderObjectsQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    limit: 100,
                    offset: 0,
                },
                qrOrderUID: props.qrOrderUID,
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
    const batchViewAction = (selectedRecords: QrOrderObject[]) => {
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
            <QrOrderObjectTableHTML
                qrOrderUID={props.qrOrderUID}
                data={data?.qrOrderObjects!}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Fragment>
    )
}

const QrOrderObjectTableHTML = (props: QrOrderObjectTableHTMLProps) => {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<QrOrderObject[]>(props.data.qrOrderObjects.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<QrOrderObject[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.qrOrderObjects.slice(from, to))
    }, [page, pageSize, props.data.qrOrderObjects])

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
                        { accessor: "qrOrderUID", title: "QR Order UID" },
                        { accessor: "objectUID", title: "Object UID" },
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
