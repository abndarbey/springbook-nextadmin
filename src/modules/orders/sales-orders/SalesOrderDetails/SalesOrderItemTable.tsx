import { useEffect, useState } from "react"

import {
    SalesOrderItem
} from "gql/generated/hooks"
import ContentCard from "components/ContentCard"
import { Box, Button, Text } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { PAGE_SIZES } from "types/enums"

interface SalesOrderItemTableProps {
    mb?: string | number
    items: SalesOrderItem[]
}

export default function SalesOrderItemTable(props: SalesOrderItemTableProps) {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<SalesOrderItem[]>(props.items.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<SalesOrderItem[]>([])

    useEffect(() => {
        const from = (page - 1) * pageSize
        const to = from + pageSize
        setRecords(props.items.slice(from, to))
    }, [page, pageSize, props.items])

    return (
        <ContentCard mb={props.mb}>
            <Box>
                <DataTable
                    minHeight={300}
                    verticalSpacing="md"
                    horizontalSpacing="sm"
                    highlightOnHover
                    noRecordsText="No records to show"
                    records={records}
                    columns={[
                        { accessor: "serial", title: "Serial" },
                        { accessor: "sku.name", title: "SKU" },
                        { accessor: "units", title: "Units" },
                        { accessor: "unitCost", title: "Unit Cost" },
                        { accessor: "unitOfMeasure", title: "Unit Of Measure" },
                        {
                            accessor: "total",
                            render: (item) => (
                                <Text>{item.unitCost! * item.units!}</Text>
                            )
                        },
                        {
                            accessor: "Action",
                            render: (item) => (
                                <Button>Select Warehouse</Button>
                            )
                        },
                    ]}
                    selectedRecords={selectedRecords}
                    onSelectedRecordsChange={setSelectedRecords}
                    totalRecords={props.items.length}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPage={pageSize}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    recordsPerPageLabel="Rows Per Page"
                />
            </Box>
        </ContentCard>
    )
}
