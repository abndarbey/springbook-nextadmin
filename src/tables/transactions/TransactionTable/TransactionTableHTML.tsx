import { useEffect, useState } from "react"
import { Transaction, TransactionsResult } from "gql/generated/hooks"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import TableRowActions from "components/TableWrapper/TableRowActions"
import { PAGE_SIZES } from "types/enums"
import moment from "moment"

interface TransactionTableHTMLProps {
    data: TransactionsResult
    viewAction: any
    editAction: any
    filterAction?: any
    filterOptions: string[]
}

export default function TransactionTableHTML(props: TransactionTableHTMLProps) {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Transaction[]>(props.data.transactions.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Transaction[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.transactions.slice(from, to))
    }, [page, pageSize, props.data.transactions])

    return (
        <ContentCard>
            <TableActionBar
                selectedRecords={selectedRecords}
                showActionButton={true}
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
                        { accessor: 'name' },
                        { accessor: 'objectType', title: 'Object'},
                        { accessor: 'organization.name', title: 'Organization' },
                        {
                            accessor: "geoLocation", title: "Geo Location",
                            render: (item) => (
                                <>{item.geoLocation?.lat} X {item.geoLocation?.lon}</>
                            )
                        },
                        {
                            accessor: "createdAt", title: "Timestamp",
                            render: (item) => (
                                <Text>{moment(item.createdAt).format('Do MMMM YYYY, h:mm:ss a')}</Text>
                            )
                        },
                        { accessor: 'isPending', title: 'Pending' },
                    ]}
                    selectedRecords={selectedRecords}
                    onSelectedRecordsChange={setSelectedRecords}
                    totalRecords={props.data.total}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPage={pageSize}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    recordsPerPageLabel='Rows Per Page'
                />
            </Box>
        </ContentCard>
    )
}