import { useState } from "react"
import {
    useRecepiesQuery,
    useRecepieArchiveMutation,
    useRecepieUnarchiveMutation,
    Recepie,
    SortByOption,
    SortDir,
    FilterOption,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { useRouter } from "next/router"
import RecepieTableHTML from "./RecepieTableHTML"

interface RecepieTableProps {
    orgID?: string | null | undefined
}

export default function RecepieTable(props: RecepieTableProps) {
    const router = useRouter()

    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useRecepieArchiveMutation({})
    const [unarchiveRequest] = useRecepieUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useRecepiesQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgID: props.orgID,
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

    // Row Actions
    const viewAction = (item: Recepie) => {
        router.push(`/manufacturing/recepies/${item.code}`)
    }
    const editAction = (item: Recepie) => {
        router.push(`/manufacturing/recepies/${item.code}/edit`)
    }

    const archiveAction = (item: Recepie) => {
        archiveRequest({
            variables: {uid: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.recepieArchive.code}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: Recepie) => {
        unarchiveRequest({
            variables: {uid: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.recepieUnarchive.code}`,
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
    const batchViewAction = (selectedRecords: Recepie[]) => {
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
        <RecepieTableHTML
            data={data?.recepies!}
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
