import { useEffect, useState } from "react"
import { Container, ContainersResult } from "@lib/generated/hooks"
import { Badge, Box,Text, useMantineTheme } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import TableRowActions from "components/TableWrapper/TableRowActions"
import { PAGE_SIZES } from "types/enums"

interface ContainerTableProps {
    data: ContainersResult
    viewAction: (item: Container) => void
    editAction: (item: Container) => void
    archiveAction: (item: Container) => void
    unarchiveAction: (item: Container) => void
    batchViewAction?: (selectedRecords: Container[]) => void
    filterAction?: (filter: string) => void
    filterOptions: string[]
}

export default function ContainerTable(props: ContainerTableProps) {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Container[]>(props.data.containers.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Container[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.containers.slice(from, to))
    }, [page, pageSize, props.data.containers])

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
                        { accessor: "code", width: "10%" },
                        { accessor: "latestTransferLog.owner.name", title: "Owner" },
                        { accessor: "latestTransferLog.custodian.name", title: "Custodian" },
                        { accessor: "latestTransferLog.warehouse.name", title: "Warehouse" },
                        { accessor: "latestTransaction.name", title: "Latest Transaction" },
                        {
                            accessor: "status",
                            render: (item) => (
                                <Badge
                                    color={!item.isArchived ? "blue" : "gray"}
                                    variant={theme.colorScheme === "dark" ? "light" : "light"}
                                    >
                                    {!item.isArchived ? "Active" : "Disabled"}
                                </Badge>
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
                    recordsPerPageLabel="Rows Per Page"
                />
            </Box>
        </ContentCard>
    )
}