import { useState } from "react"

import {
    useCellsQuery,
    useCellArchiveMutation,
    useCellUnarchiveMutation,
    Cell,
    SortByOption,
    SortDir,
    FilterOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { useRouter } from "next/router"
import CellTableHTML from "./CellTableHTML"

interface CellTableProps {
    orgUID?: string | null | undefined
    warehouseUID?: string | null | undefined
    rackID?: string | null | undefined
}

export default function CellTable(props: CellTableProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useCellArchiveMutation({})
    const [unarchiveRequest] = useCellUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useCellsQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgUID: props.orgUID,
                    warehouseUID: props.warehouseUID,
                    limit: 100,
                    offset: 0,
                },
                rackID: props.rackID,
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
            color: "red",
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    // Row Actions
    const viewAction = (item: Cell) => {
        router.push(`/warehouses/cells/${item.code}`)
    }
    const editAction = (item: Cell) => {
        router.push(`/warehouses/cells/${item.code}/edit`)
    }

    const archiveAction = (item: Cell) => {
        archiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.cellArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: Cell) => {
        unarchiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.cellUnarchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    // Batch Actions
    const batchViewAction = (selectedRecords: Cell[]) => {
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

    return (
        <CellTableHTML
            data={data?.cells!}
            viewAction={viewAction}
            editAction={editAction}
            archiveAction={archiveAction}
            unarchiveAction={unarchiveAction}
            batchViewAction={batchViewAction}
            filterAction={filterAction}
            filterOptions={filterOptions}
        />
    )
}
