import { useState } from "react"
import { useRouter } from "next/router"
import {
    useContainersQuery,
    useContainerArchiveMutation,
    useContainerUnarchiveMutation,
    Container,
    SortByOption,
    SortDir,
    FilterOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import ContainerTableHTML from "./ContainerTableHTML"

interface ContainerTableProps {
    orgUID?: string | null | undefined
}

export default function ContainerTable(props: ContainerTableProps) {
    const router = useRouter()

    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)
    const [archiveRequest] = useContainerArchiveMutation({})
    const [unarchiveRequest] = useContainerUnarchiveMutation({})

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useContainersQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: filterValue,
                    orgUID: props.orgUID,
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
    const viewAction = (item: Container) => {
        router.push(`/inventory/containers/${item.code}`)
    }
    const editAction = (item: Container) => {
        router.push(`/inventory/containers/${item.code}/edit`)
    }

    const archiveAction = (item: Container) => {
        archiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.containerArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const unarchiveAction = (item: Container) => {
        unarchiveRequest({
            variables: {id: item.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.containerUnarchive.name}`,
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
    const batchViewAction = (selectedRecords: Container[]) => {
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
        <ContainerTableHTML
            data={data?.containers!}
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
