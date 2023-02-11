import { useEffect, useState } from 'react'
import { INavTrailProps } from 'components/NavTrails'
import Page from 'components/Page'

import {
    useWarehouseTypesQuery,
    useWarehouseTypeArchiveMutation,
    useWarehouseTypeUnarchiveMutation,
    WarehouseType,
    WarehouseTypesResult,
    SortByOption,
    SortDir,
    FilterOption
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'
import PageHeader from 'components/PageHeader'
import ContentCard from 'components/ContentCard'
import TableActionBar from 'components/TableWrapper/TableActionBar'
import { Badge, Box, Text, useMantineTheme } from '@mantine/core'
import { DataTable } from 'mantine-datatable'
import TableRowActions from 'components/TableWrapper/TableRowActions'
import { useRouter } from 'next/router'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import { PAGE_SIZES } from 'types/enums'

interface WarehouseTypeTableProps {
    data: WarehouseTypesResult
    viewAction: any
    editAction: any
    archiveAction: any
    unarchiveAction: any
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Warehouse Types', href: '#' },
]

export default function WarehouseTypeList() {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useWarehouseTypeArchiveMutation({})
    const [unarchiveRequest] = useWarehouseTypeUnarchiveMutation({})

    const filterOptions: string[] = ['All', 'Active', 'Archived']

    // fetch data
    const { data, loading, error } = useWarehouseTypesQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    limit: 100,
                    offset: 0,
                },
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
            color: 'red',
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    const handleNew = () => {
        router.push('/warehouses/warehouse-types/new')
    }

    // Row Actions
    const viewAction = (item: WarehouseType) => {
        router.push(`/warehouses/warehouse-types/${item.code}`)
    }
    const editAction = (item: WarehouseType) => {
        router.push(`/warehouses/warehouse-types/${item.code}/edit`)
    }

    const archiveAction = (item: WarehouseType) => {
        archiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Archived - ${res.data.organizationArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: WarehouseType) => {
        unarchiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Unarchived - ${res.data.organizationUnarchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    // Batch Actions
    const batchViewAction = (selectedRecords: WarehouseType[]) => {
        selectedRecords.map((item, key) => {
            console.log(item.code)
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

    const actionButtons: IActionButtonProps[] = [
        {
            type: 'new',
            name: 'New',
            disabled: false,
            action: handleNew,
        }
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='Warehouse Types' buttons={actionButtons} />
            <WarehouseTypeTable
                data={data?.warehouseTypes!}
                viewAction={viewAction}
                editAction={editAction}
                archiveAction={archiveAction}
                unarchiveAction={unarchiveAction}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Page>
    )
}

const WarehouseTypeTable = (props: WarehouseTypeTableProps) => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<WarehouseType[]>(props.data.warehouseTypes.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<WarehouseType[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.warehouseTypes.slice(from, to))
    }, [page, pageSize, props.data.warehouseTypes])

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
