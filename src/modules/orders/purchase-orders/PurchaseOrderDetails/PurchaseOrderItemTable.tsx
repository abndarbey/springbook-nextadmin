import { useEffect, useState } from "react"

import {
    PurchaseOrderItem
} from "gql/generated/hooks"
import ContentCard from "components/ContentCard"
import { Box, Text } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import { PAGE_SIZES } from "types/enums"

interface PurchaseOrderItemTableProps {
    mb?: string | number
    items: PurchaseOrderItem[]
}

export default function PurchaseOrderItemTable(props: PurchaseOrderItemTableProps) {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1])
    const [page, setPage] = useState(1)
    const [records, setRecords] = useState<PurchaseOrderItem[]>(props.items.slice(0, pageSize))
    const [selectedRecords, setSelectedRecords] = useState<PurchaseOrderItem[]>([])

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
