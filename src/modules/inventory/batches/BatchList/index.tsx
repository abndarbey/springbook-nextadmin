import { useEffect, useState } from "react"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"

import {
    useBatchesQuery,
    useBatchArchiveMutation,
    useBatchUnarchiveMutation,
    Batch,
    BatchResult,
    SortByOption,
    SortDir,
    FilterOption
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import PageHeader from "components/PageHeader"
import ContentCard from "components/ContentCard"
import TableActionBar from "components/TableWrapper/TableActionBar"
import { Badge, Box, Text, useMantineTheme } from "@mantine/core"
import { DataTable } from "mantine-datatable"
import TableRowActions from "components/TableWrapper/TableRowActions"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PAGE_SIZES } from "types/enums"
import { PageProps } from "types/types"
import BatchTable from "./BatchTable"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Batches", href: "#" },
]

export default function BatchList(props: PageProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useBatchArchiveMutation({})
    const [unarchiveRequest] = useBatchUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useBatchesQuery(
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
            color: "red",
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    const handleNew = () => {
        router.push("/inventory/batches/new")
    }

    // Row Actions
    const viewAction = (item: Batch) => {
        router.push(`/inventory/batches/${item.code}`)
    }
    const editAction = (item: Batch) => {
        router.push(`/inventory/batches/${item.code}/edit`)
    }

    const archiveAction = (item: Batch) => {
        archiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.organizationArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: Batch) => {
        unarchiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.organizationUnarchive.name}`,
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
    const batchViewAction = (selectedRecords: Batch[]) => {
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

    const actionButtons: IActionButtonProps[] = [
        {
            type: "new",
            name: "New",
            disabled: false,
            action: handleNew,
        }
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <BatchTable
                data={data?.batches!}
                viewAction={viewAction}
                editAction={editAction}
                archiveAction={archiveAction}
                unarchiveAction={unarchiveAction}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
        </Page>
    )
}
