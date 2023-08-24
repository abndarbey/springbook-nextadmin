import { useState } from "react"

import {
    useWarehouseTypesQuery,
    useWarehouseTypeArchiveMutation,
    useWarehouseTypeUnarchiveMutation,
    WarehouseType,
    SortByOption,
    SortDir,
    FilterOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { useRouter } from "next/router"
import WarehouseTypeTableHTML from "./WarehouseTypeTableHTML"

interface WarehouseTypeTableProps {
    orgID?: string | null | undefined
}

export default function WarehouseTypeTable(props: WarehouseTypeTableProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useWarehouseTypeArchiveMutation({})
    const [unarchiveRequest] = useWarehouseTypeUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useWarehouseTypesQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgID: props.orgID,
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
            color: "red",
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    // Row Actions
    const viewAction = (item: WarehouseType) => {
        router.push(`/warehouses/warehouse-types/${item.code}`)
    }
    const editAction = (item: WarehouseType) => {
        router.push(`/warehouses/warehouse-types/${item.code}/edit`)
    }

    const archiveAction = (item: WarehouseType) => {
        archiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.warehouseTypeArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: WarehouseType) => {
        unarchiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.warehouseTypeUnarchive.name}`,
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
    const batchViewAction = (selectedRecords: WarehouseType[]) => {
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
        <WarehouseTypeTableHTML
            data={data?.warehouseTypes!}
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
