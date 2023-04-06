import { useState } from "react"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"

import {
    useSkuCataloguesQuery,
    useSkuCatalogueArchiveMutation,
    useSkuCatalogueUnarchiveMutation,
    SkuCatalogue,
    SortByOption,
    SortDir,
    FilterOption,
    useSkuCreateMutation
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import { PageProps } from "types/types"
import SkuCatTableHTML from "./SkuCatTableHTML"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Sku Catalogues", href: "#" },
]

export default function SkuCatTable(props: PageProps) {
    const router = useRouter()
    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [newSku] = useSkuCreateMutation({})
    const [archiveRequest] = useSkuCatalogueArchiveMutation({})
    const [unarchiveRequest] = useSkuCatalogueUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useSkuCataloguesQuery(
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
        router.push("/catalogues/skus/new")
    }

    // Row Actions
    const viewAction = (item: SkuCatalogue) => {
        router.push(`/catalogues/skus/${item.code}`)
    }
    const editAction = (item: SkuCatalogue) => {
        router.push(`/catalogues/skus/${item.code}/edit`)
    }

    const addToInventory = (item: SkuCatalogue) => {
        newSku({
            variables: {
                input: {
                    uid: item.uid
                }
            }
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Added - ${res.data.skuCreate.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const archiveAction = (item: SkuCatalogue) => {
        archiveRequest({
            variables: {uid: item.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.skuCatalogueArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: SkuCatalogue) => {
        unarchiveRequest({
            variables: {uid: item.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.skuCatalogueUnarchive.name}`,
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
    const batchViewAction = (selectedRecords: SkuCatalogue[]) => {
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
        <SkuCatTableHTML
            data={data?.skuCatalogues!}
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
