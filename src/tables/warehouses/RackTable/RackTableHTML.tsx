import { useEffect, useState } from "react"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { Rack, RacksResult } from "gql/generated/hooks"
import { PAGE_SIZES } from "types/enums"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { DataTable } from "mantine-datatable"
import TableRowActions from "components/TableWrapper/TableRowActions"

interface RackTableHTMLProps {
    data: RacksResult
    viewAction: any
    editAction: any
    archiveAction: any
    unarchiveAction: any
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

export default function RackTableHTML(props: RackTableHTMLProps) {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Rack[]>(props.data.racks.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Rack[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.racks.slice(from, to))
    }, [page, pageSize, props.data.racks])

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
                        {
                            accessor: "matrix",
                            render: (item) => (
                                <>{item.rows} X {item.columns}</>
                            )
                        },
                        { accessor: "type.name", title: "Type" },
                        { accessor: "warehouse.name", title: "Warehouse" },
                        { accessor: "organization.name", title: "Organization" },
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