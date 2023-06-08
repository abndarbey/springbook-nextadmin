import { FilterOption, Contact, ContactsResult, SortByOption, SortDir, useContactsQuery } from "gql/generated/hooks"
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

export default function ContactSelectModal(props: ISelectModalProps) {
    const theme = useMantineTheme()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
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
    const { data, loading, error } = useContactsQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgUID: props.organizationUID,
                    limit: 100,
                    offset: 0,
                }
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
            <PageHeader title='Select Contact' />
            <ContactTable
                data={data?.contacts!}
                filterAction={filterAction}
                filterOptions={filterOptions}
                handleSelect={props.handleSelect}
                setOpened={props.setOpened}
            />
        </Modal>
    )
}

interface ContactTableProps {
    data: ContactsResult
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
    handleSelect?: any
    setOpened: Dispatch<SetStateAction<boolean>>
}

const sectorColors: Record<string, string> = {
    manufacturing: 'blue',
    trading: 'cyan',
    tpl: 'pink',
}

const ContactTable = (props: ContactTableProps) => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<Contact[]>(props.data.contacts.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Contact[]>([])

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
        setRecords(props.data.contacts.slice(from, to))
    }, [page, pageSize, props.data.contacts])

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
                        { accessor: 'name', width: '20%' },
                        { accessor: 'website', width: '20%' },
                        {
                            accessor: 'sector',
                            // width: 160,
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
