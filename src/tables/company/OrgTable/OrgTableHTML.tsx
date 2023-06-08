import { useEffect, useState } from "react"
import { Organization, OrganizationsResult } from "gql/generated/hooks"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import TableRowActions from "components/TableWrapper/TableRowActions"
import { PAGE_SIZES } from "types/enums"

interface OrgTableHTMLProps {
    data: OrganizationsResult
    viewAction: any
    editAction: any
    archiveAction: any
    unarchiveAction: any
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

const sectorColors: Record<string, string> = {
    manufacturing: 'blue',
    trading: 'cyan',
    tpl: 'pink',
}

export default function OrgTableHTML(props: OrgTableHTMLProps) {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Organization[]>(props.data.organizations.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Organization[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.organizations.slice(from, to))
    }, [page, pageSize, props.data.organizations])

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
                        { accessor: 'name', width: '20%' },
                        { accessor: 'website', width: '20%' },
                        // {
                        //     accessor: 'website',
                        //     width: '20%',
                        //     render: (item) => (
                        //         <Box>
                        //             <p>{item.name}</p>
                        //             <a href={item.website}>{item.website}</a>
                        //         </Box>
                        //     )
                        // },
                        {
                            accessor: 'sector',
                            render: (item) => (
                                <Badge
                                    color={sectorColors[item.sector!]}
                                    variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
                                    >
                                    {item.sector}
                                </Badge>
                            )
                        },
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