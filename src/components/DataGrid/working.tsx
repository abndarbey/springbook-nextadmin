import React, { useState, useEffect } from 'react'
import {
    useMantineTheme,
    ActionIcon,
    Badge,
    Button,
    Box,
    Grid,
    Group,
    Menu,
    Stack,
    Text,
    TextInput,
    Breadcrumbs,
    Anchor,
    Select,
    Paper,
} from '@mantine/core'
import { closeModal, openModal } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { DataTable } from 'mantine-datatable'
import { companies, Company} from './data/companies'
import {
    IconAlignJustified,
    IconDots,
    IconEdit,
    IconEye,
    IconMessage,
    IconNote,
    IconPlus,
    IconReportAnalytics,
    IconSearch,
    IconTrash,
} from '@tabler/icons'

const sectorColors: Record<string, string> = {
    manufacturing: 'blue',
    trading: 'cyan',
    tpl: 'pink',
}

const PAGE_SIZES = [5, 10, 25, 50]

const items = [
    { title: 'Dashboard', href: '#' },
    { title: 'Organizations', href: '#' },
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
))

const showInfo = (item: Company) => {
    openModal({
        modalId: 'view',
        title: 'Showing company information',
        children: (
            <Stack>
                <Text>Heres where you could show more information...</Text>
                <Grid gutter="xs">
                    <Grid.Col span={2}>ID</Grid.Col>
                    <Grid.Col span={10}>{item.id}</Grid.Col>
                    <Grid.Col span={2}>Name</Grid.Col>
                    <Grid.Col span={10}>{item.name}</Grid.Col>
                </Grid>
                <Button onClick={() => closeModal('view')}>Close</Button>
            </Stack>
        ),
    })
}

const editInfo = (item: Company) => {
    openModal({
        modalId: 'edit',
        title: 'Editing company information',
        children: (
            <Stack>
                <Text>Heres where you could put an edit form...</Text>
                <Grid gutter="xs">
                    <Grid.Col span={2}>ID</Grid.Col>
                    <Grid.Col span={10}>{item.id}</Grid.Col>
                    <Grid.Col span={2}>Name</Grid.Col>
                    <Grid.Col span={10}>{item.name}</Grid.Col>
                </Grid>
                <Button onClick={() => closeModal('edit')}>Close</Button>
            </Stack>
        ),
    })
}

const deleteCompany = (item: Company) => {
    openModal({
        modalId: 'delete',
        title: 'Delete company',
        children: (
            <Stack>
                <Text>Heres where you could ask for confirmation before deleting...</Text>
                <Grid gutter="xs">
                    <Grid.Col span={2}>ID</Grid.Col>
                    <Grid.Col span={10}>{item.id}</Grid.Col>
                    <Grid.Col span={2}>Name</Grid.Col>
                    <Grid.Col span={10}>{item.name}</Grid.Col>
                </Grid>
                <Button onClick={() => closeModal('delete')}>Close</Button>
            </Stack>
        ),
    })
}

const DataGrid = () => {
    const theme = useMantineTheme()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState(companies.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Company[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(companies.slice(from, to))
    }, [page, pageSize])

    return (
        <React.Fragment>
            <Breadcrumbs>{items}</Breadcrumbs>
            <Box py={10}>
                <Group position="apart">
                    <Group position='left'>
                        <Text size={40} weight={700}>Abhinav Darbey</Text>
                    </Group>
                    <Button uppercase style={{ width: 100 }} leftIcon={<IconPlus size={16} />}>
                        New
                    </Button>
                </Group>
            </Box>
            <Paper shadow="md" p="md">
                <Box pt={10}>
                    <Group position='apart'>
                        <Group>
                            <Menu withArrow>
                                <Menu.Target>
                                    <Button disabled={!selectedRecords.length} uppercase leftIcon={<IconAlignJustified size={16} />}>
                                        Actions
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Label>Application</Menu.Label>
                                    <Menu.Item
                                        icon={<IconEye size={14} />}
                                        disabled={!selectedRecords.length}
                                        onClick={() => showNotification({
                                            disallowClose: false,
                                            color: 'green',
                                            message: 'View Data',
                                        })}
                                    >
                                        View
                                    </Menu.Item>
                                    <Menu.Item
                                        icon={<IconEdit size={14} />}
                                        disabled={!selectedRecords.length}
                                        onClick={() => showNotification({
                                            disallowClose: false,
                                            color: 'blue',
                                            message: 'Edit data',
                                        })}
                                    >
                                        Edit
                                    </Menu.Item>
                                    <Menu.Item
                                        icon={<IconTrash size={14} />}
                                        disabled={!selectedRecords.length}
                                        onClick={() => showNotification({
                                            disallowClose: false,
                                            color: 'red',
                                            message: 'Deleting data is dangerous!',
                                        })}
                                    >
                                        Archive
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                        <Group>
                            <TextInput
                                placeholder="Search ..."
                                icon={<IconSearch size={16} />}
                                // value={query}
                                // onChange={(e) => setQuery(e.currentTarget.value)}
                            />
                            <Select
                                placeholder="All"
                                defaultValue='all'
                                data={[
                                    { value: 'all', label: 'All' },
                                    { value: 'final', label: 'Final' },
                                    { value: 'archived', label: 'Archived' },
                                ]}
                            />
                        </Group>
                    </Group>
                </Box>
                <Box>
                    <DataTable
                        minHeight={300}
                        verticalSpacing="md"
                        horizontalSpacing="sm"
                        // withBorder
                        // shadow="xs"
                        highlightOnHover
                        noRecordsText="No records to show"
                        records={records}
                        columns={[
                            { accessor: 'name', width: '20%' },
                            { accessor: 'streetAddress', width: '20%' },
                            { accessor: 'city', width: 160 },
                            { accessor: 'state', width: 160 },
                            {
                                accessor: 'sector',
                                width: 160,
                                render: (item) => (
                                    <Badge
                                        color={sectorColors[item.sector.toLowerCase()]}
                                        variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
                                        >
                                        {item.sector}
                                    </Badge>
                                )
                            },
                            {
                                accessor: 'status',
                                width: 160,
                                render: (item) => (
                                    <Badge
                                        color={item.status === 'Active' ? 'blue' : 'gray'}
                                        variant={theme.colorScheme === 'dark' ? 'light' : 'light'}
                                        >
                                        {item.status}
                                    </Badge>
                                )
                            },
                            {
                                accessor: 'actions',
                                title: <Text mr="xs">Actions</Text>,
                                textAlignment: 'center',
                                render: (item) => (
                                    <Group spacing={4} position="center" noWrap>
                                        <ActionIcon color="green" onClick={(e: any) => { e.stopPropagation(); showInfo(item) }}>
                                            <IconEye size={16} />
                                        </ActionIcon>
                                        <ActionIcon color="blue" onClick={(e: any) => { e.stopPropagation(); editInfo(item) }}>
                                            <IconEdit size={16} />
                                        </ActionIcon>
                                        <Menu transition="pop" withArrow position="bottom-end">
                                            <Menu.Target>
                                                <ActionIcon onClick={(e: any) => e.stopPropagation() }>
                                                    <IconDots size={16} stroke={1.5} />
                                                </ActionIcon>
                                            </Menu.Target>
                                            <Menu.Dropdown>
                                                <Menu.Item
                                                    icon={<IconMessage size={16}
                                                    stroke={1.5} />}
                                                    onClick={(e: any) => e.stopPropagation()}
                                                >
                                                    Send message
                                                </Menu.Item>
                                                <Menu.Item
                                                    icon={<IconNote size={16} stroke={1.5} />}
                                                    onClick={(e: any) => e.stopPropagation()}
                                                >
                                                    Add note
                                                </Menu.Item>
                                                <Menu.Item
                                                    icon={<IconReportAnalytics size={16} stroke={1.5} />}
                                                    onClick={(e: any) => e.stopPropagation()}
                                                >
                                                    Analytics
                                                </Menu.Item>
                                                <Menu.Item
                                                    icon={<IconTrash size={16}
                                                    stroke={1.5} />}
                                                    color="red"
                                                    onClick={(e: any) => { e.stopPropagation(); deleteCompany(item) }}
                                                >
                                                    Archive
                                                </Menu.Item>
                                            </Menu.Dropdown>
                                        </Menu>
                                    </Group>
                                ),
                            },
                        ]}
                        selectedRecords={selectedRecords}
                        onSelectedRecordsChange={setSelectedRecords}
                        totalRecords={companies.length}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPage={pageSize}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        recordsPerPageLabel='Rows Per Page'
                    />
                </Box>
            </Paper>
        </React.Fragment>
    )
}

export default DataGrid