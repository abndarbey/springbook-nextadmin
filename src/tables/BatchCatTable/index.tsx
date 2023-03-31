import { useState } from "react"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"

import {
    useBatchCataloguesQuery,
    useBatchCatalogueArchiveMutation,
    useBatchCatalogueUnarchiveMutation,
    BatchCatalogue,
    SortByOption,
    SortDir,
    FilterOption,
    useBatchCreateMutation
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import BatchCatTableHTML from "./BatchCatTableHTML"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Batch Catalogues", href: "#" },
]

export default function BatchCatTable(props: PageProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [newBatch] = useBatchCreateMutation({})
    const [archiveRequest] = useBatchCatalogueArchiveMutation({})
    const [unarchiveRequest] = useBatchCatalogueUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useBatchCataloguesQuery(
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
        router.push("/catalogues/batches/new")
    }

    // Row Actions
    const viewAction = (item: BatchCatalogue) => {
        router.push(`/catalogues/batches/${item.code}`)
    }
    const editAction = (item: BatchCatalogue) => {
        router.push(`/catalogues/batches/${item.code}/edit`)
    }

    const addToInventory = (item: BatchCatalogue) => {
        newBatch({
            variables: {
                input: {
                    uid: item.uid
                }
            }
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Added - ${res.data.batchCreate.batchNumber}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const archiveAction = (item: BatchCatalogue) => {
        archiveRequest({
            variables: {uid: item.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.batchArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: BatchCatalogue) => {
        unarchiveRequest({
            variables: {uid: item.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.batchUnarchive.name}`,
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
    const batchViewAction = (selectedRecords: BatchCatalogue[]) => {
        selectedRecords.map((item) => {
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
            <BatchCatTableHTML
                data={data?.batchCatalogues!}
                viewAction={viewAction}
                addAction={addToInventory}
                editAction={editAction}
                archiveAction={archiveAction}
                unarchiveAction={unarchiveAction}
                batchViewAction={batchViewAction}
                filterAction={filterAction}
                filterOptions={filterOptions}
            />
    )
}
