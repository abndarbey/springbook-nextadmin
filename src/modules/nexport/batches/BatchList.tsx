import { useEffect, useState } from 'react'
import { INavTrailProps } from 'components/NavTrails'
import Page from 'components/Page'

import {
    useNexportBatchCataloguesQuery,
    useBatchCatalogueArchiveMutation,
    useBatchCatalogueUnarchiveMutation,
    BatchCatalogue,
    BatchCataloguesResult,
    SortByOption,
    SortDir,
    FilterOption,
    useBatchCreateMutation,
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
import { PageProps } from 'types/types'

interface BatchCatalogueTableProps {
    data: BatchCataloguesResult
    viewAction: any
    addAction: any
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Nexport', href: '#' },
    { title: 'Batch Catalogues', href: '#' },
]

export default function BatchCatalogueList(props: PageProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [newBatch] = useBatchCreateMutation({})

    const filterOptions: string[] = ['All', 'Active', 'Archived']

    // fetch data
    const { data, loading, error } = useNexportBatchCataloguesQuery(
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

    // Row Actions
    const viewAction = (item: BatchCatalogue) => {
        router.push(`/nexport/batches/${item.code}`)
    }

    const addToInventory = (item: BatchCatalogue) => {
        newBatch({
            variables: {
                input: {
                    uid: item.uid
                }
            }
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Added - ${res.data.batchCreate.batchNumber}`,
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
    const batchViewAction = (selectedRecords: BatchCatalogue[]) => {
        selectedRecords.map((item) => {
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

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <BatchCatalogueTable
                data={data?.nexportBatchCatalogues!}
                viewAction={viewAction}
                addAction={addToInventory}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Page>
    )
}

const BatchCatalogueTable = (props: BatchCatalogueTableProps) => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<BatchCatalogue[]>(props.data.batchCatalogues.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<BatchCatalogue[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.batchCatalogues.slice(from, to))
    }, [page, pageSize, props.data.batchCatalogues])

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
                        { accessor: 'batchNumber' },
                        { accessor: 'sku.name', title: 'SKU' },
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
                                    addAction={props.addAction}
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
