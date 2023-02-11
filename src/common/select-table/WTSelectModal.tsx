import { FilterOption, WarehouseType, WarehouseTypesResult, SortByOption, SortDir, useWarehouseTypesQuery } from "@lib/generated/hooks"
import { Badge, Box, Button, Group, Modal, useMantineTheme } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import ContentCard from "components/ContentCard"
import TableActionBar from 'components/TableWrapper/TableActionBar'
import PageHeader from "components/PageHeader"
import PageLoader from "components/PageLoader"
import { DataTable } from "mantine-datatable"
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react"
import { PAGE_SIZES } from 'types/enums'
import { ISelectModalProps } from "./interface"

export default function WarehouseTypeSelectModal(props: ISelectModalProps) {
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
                orgUID: props.organizationUID
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
            <PageHeader title='Select WarehouseType' />
            <WarehouseTypeTable
                data={data?.warehouseTypes!}
                filterAction={filterAction}
                filterOptions={filterOptions}
                handleSelect={props.handleSelect}
                setOpened={props.setOpened}
            />
        </Modal>
    )
}

interface WarehouseTypeTableProps {
    data: WarehouseTypesResult
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
    handleSelect: any
    setOpened: Dispatch<SetStateAction<boolean>>
}

const WarehouseTypeTable = (props: WarehouseTypeTableProps) => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<WarehouseType[]>(props.data.warehouseTypes.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<WarehouseType[]>([])

    const handleSelect = (e: any) => {
        e.preventDefault()
        selectedRecords.map((item) => {
            props.handleSelect(item)
        })

        props.setOpened(false)
    }

    const handleCancel = (e: any) => {
        e.preventDefault()
        props.handleSelect(undefined)
        props.setOpened(false)
    }

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.data.warehouseTypes.slice(from, to))
    }, [page, pageSize, props.data.warehouseTypes])

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
                <Button
                    color='dark'size="md" onClick={(e: any) => handleCancel(e)}>Cancel</Button>
                <Button size="md" onClick={(e: any) => handleSelect(e)}>Select</Button>
            </Group>
        </ContentCard>
    )
}
