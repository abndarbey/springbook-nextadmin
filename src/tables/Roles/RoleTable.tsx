import { useEffect, useState } from "react"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { Role, RolesResult } from "@lib/generated/hooks"
import { PAGE_SIZES } from "types/enums"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { DataTable } from "mantine-datatable"
import TableRowActions from "components/TableWrapper/TableRowActions"

interface RoleTableProps {
    data: RolesResult
    viewAction: any
    editAction: any
    archiveAction: any
    unarchiveAction: any
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

export default function RoleTable(props: RoleTableProps) {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Role[]>(props.data.roles.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Role[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.roles.slice(from, to))
    }, [page, pageSize, props.data.roles])

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
                        { accessor: 'name' },
                        { accessor: 'department.code', title: 'Department' },
                        { accessor: 'organization.code', title: 'Organization' },
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