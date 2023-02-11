import { Fragment, FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    useMantineTheme,
    Badge,
    Box,
    Text,
    Paper,
} from '@mantine/core'
import { DataTable } from 'mantine-datatable'
import { companies, Company} from './data/companies'
import TableActionBar from './TableActionBar'
import TableRowActions from './TableRowActions'
import PageHeader from 'components/PageHeader'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import ContentCard from 'components/ContentCard'

interface DataGridProps {
    title: string
    buttonName: string
    buttonLink: string
}

const sectorColors: Record<string, string> = {
    manufacturing: 'blue',
    trading: 'cyan',
    tpl: 'pink',
}

const PAGE_SIZES = [5, 10, 25, 50]

const DataGrid: FC<DataGridProps> = (props) => {
    const theme = useMantineTheme()
    const router = useRouter()

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState(companies.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<Company[]>([])

    const handleNew = () => {
        router.push(props.buttonLink)
    }

    const actionButtons: IActionButtonProps[] = [
        {
            type: 'new',
            name: props.buttonName,
            disabled: false,
            action: handleNew,
        }
    ]

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(companies.slice(from, to))
    }, [page, pageSize])

    return (
        <Fragment>
            <PageHeader title={props.title} buttons={actionButtons} />
            <ContentCard>
                <TableActionBar selectedRecords={selectedRecords} />
                <Box>
                    <DataTable
                        minHeight={300}
                        verticalSpacing="md"
                        horizontalSpacing="sm"
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
                                render: (item) => (<TableRowActions item={item} />)
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
            </ContentCard>
        </Fragment>
    )
}

export default DataGrid