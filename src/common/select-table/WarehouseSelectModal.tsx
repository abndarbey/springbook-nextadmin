import { FilterOption, Warehouse, WarehousesResult, SortByOption, SortDir, useWarehousesQuery } from "gql/generated/hooks"
import { Badge, Box, Button, Group, Modal, useMantineTheme } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import ContentCard from "components/ContentCard"
import TableActionBar from 'components/TableWrapper/TableActionBar'
import PageHeader from "components/PageHeader"
import PageLoader from "components/PageLoader"
import { DataTable } from "mantine-datatable"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { PAGE_SIZES } from 'types/enums'
import { ISelectModalProps } from "./interface"

export default function WarehouseSelectModal(props: ISelectModalProps) {
    const theme = useMantineTheme()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.Active)
    const filterOptions: string[] = ['All', 'Active', 'Archived']

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

    // fetch data
    const { data, loading, error } = useWarehousesQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgID: props.organizationID,
                    limit: 100,
                    offset: 0,
                },
                isThirdParty: props.isThirdParty,
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

    return (
        <Modal
            centered
            size="70%"
            overflow="inside"
            opened={props.opened}
            onClose={() => props.setOpened(false)}
            withCloseButton={false}
            // title="Introduce yourself!"
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
        >
            <PageHeader title='Select Warehouse' />
            <WarehouseTable
                data={data?.warehouses!}
                filterAction={filterAction}
                filterOptions={filterOptions}
                handleSelect={props.handleSelect}
                handleClear={props.handleClear}
                setOpened={props.setOpened}
            />
        </Modal>
    )
}

interface WarehouseTableProps {
    data: WarehousesResult
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
    handleSelect?: any
    handleClear?: any
    setOpened: Dispatch<SetStateAction<boolean>>
}

const WarehouseTable = (props: WarehouseTableProps) => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Warehouse[]>(props.data.warehouses.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Warehouse[]>([])

    const handleSelect = (e: any) => {
        e.preventDefault()
        selectedRecords.map((item) => {
            props.handleSelect(item)
        })
        props.setOpened(false)
        return
    }

    const handleClear = (e: any) => {
        e.preventDefault()
        if (props.handleClear) {
            props.handleClear()
        }
        props.setOpened(false)
        return
    }

    const handleCancel = (e: any) => {
        e.preventDefault()
        props.handleSelect(undefined)
        props.setOpened(false)
    }

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.warehouses.slice(from, to))
    }, [page, pageSize, props.data.warehouses])

    return (
        <ContentCard>
            <TableActionBar
                selectedRecords={selectedRecords}
                showActionButton={false}
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
                            render: (item) => (
                                <Badge
                                    color={!item.isArchived ? 'blue' : 'gray'}
                                    variant={theme.colorScheme === 'dark' ? 'light' : 'light'}
                                    >
                                    {!item.isArchived ? 'Active' : 'Disabled'}
                                </Badge>
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
            <Group position="apart" mt="md">
                <Group>
                    <Button color='dark'size="md" onClick={(e: any) => handleCancel(e)}>Cancel</Button>
                    <Button color='yellow'size="md" onClick={(e: any) => handleClear(e)}>Clear</Button>
                </Group>
                <Button size="md" onClick={(e: any) => handleSelect(e)}>Select</Button>
            </Group>
        </ContentCard>
    )
}
