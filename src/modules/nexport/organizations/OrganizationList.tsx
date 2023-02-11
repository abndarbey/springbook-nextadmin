import { useEffect, useState } from 'react'
import { INavTrailProps } from 'components/NavTrails'
import Page from 'components/Page'

import {
    useOrganizationsQuery,
    useContactCreateMutation,
    Organization,
    OrganizationsResult,
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

interface OrganizationTableProps {
    data: OrganizationsResult
    viewAction: any
    addAction: any
    filterAction?: any
    filterOptions: string[]
}

const sectorColors: Record<string, string> = {
    manufacturing: 'blue',
    trading: 'cyan',
    tpl: 'pink',
}

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Nexport Organizations', href: '#' },
]

export default function OrganizationList() {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [newContact] = useContactCreateMutation({})

    const filterOptions: string[] = ['All', 'Active', 'Archived']

    // fetch data
    const { data, loading, error } = useOrganizationsQuery(
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
        router.push('/nexport/organizations/new')
    }

    // Row Actions
    const viewAction = (item: Organization) => {
        router.push(`/nexport/organizations/${item.code}`)
    }

    const addToContact = (item: Organization) => {
        newContact({
            variables: {
                input: {
                    companyUID: item.uid
                }
            }
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: 'green',
                message: `Added - ${res.data.contactCreate.name}`,
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
    const batchViewAction = (selectedRecords: Organization[]) => {
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
            <PageHeader title='Nexport Organizations' />
            <OrganizationTable
                data={data?.organizations!}
                viewAction={viewAction}
                addAction={addToContact}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Page>
    )
}

const OrganizationTable = (props: OrganizationTableProps) => {
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
