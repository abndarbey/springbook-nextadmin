import { useEffect, useState } from "react"
import { Batch, BatchResult } from "@lib/generated/hooks"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import TableRowActions from 'components/TableWrapper/TableRowActions'
import { PAGE_SIZES } from 'types/enums'

interface BatchTableProps {
    data: BatchResult
    viewAction: (item: Batch) => void
    editAction: (item: Batch) => void
    archiveAction: (item: Batch) => void
    unarchiveAction: (item: Batch) => void
    batchViewAction?: (selectedRecords: Batch[]) => void
    filterAction?: (filter: string) => void
    filterOptions: string[]
}

export default function BatchTable(props: BatchTableProps) {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Batch[]>(props.data.batches.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Batch[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.batches.slice(from, to))
    }, [page, pageSize, props.data.batches])

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
                        { accessor: 'code', width: '10%' },
                        { accessor: 'batchNumber', title: 'Batch Number' },
                        { accessor: 'sku.name', title: 'SKU' },
                        { accessor: 'organization.name', title: 'Organization' },
                        { accessor: 'cartonCount', title: 'Batchs Count' },
                        {
                            accessor: 'status',
                            // width: 160,
                            render: (item) => (
                                <Badge
                                    color={!item.isArchived ? 'blue' : 'gray'}
                                    variant={theme.colorScheme === 'dark' ? 'light' : 'light'}
                                    >
                                    {!item.isArchived ? 'Active' : 'Disabled'}
                                </Badge>
                            )
                        },
                        {
                            accessor: 'actions',
                            title: <Text mr="xs">Actions</Text>,
                            textAlignment: 'center',
                            render: (item) => (
                                <TableRowActions
                                    item={item}
                                    viewAction={props.viewAction}
                                    editAction={props.editAction}
                                    archiveAction={props.archiveAction}
                                    unarchiveAction={props.unarchiveAction}
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
                    recordsPerPageLabel='Rows Per Page'
                />
            </Box>
        </ContentCard>
    )
}