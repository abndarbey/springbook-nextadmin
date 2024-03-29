import { useState } from "react"
import {
    useTransactionsQuery,
    Transaction,
    SortByOption,
    SortDir,
    FilterOption
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { useRouter } from "next/router"
import TransactionTableHTML from "./TransactionTableHTML"

interface TransactionTableProps {
    orgID?: string | null | undefined
    objectID?: string | null | undefined
}

export default function TransactionTable(props: TransactionTableProps) {
    const router = useRouter()

    const [filterValue, setFilterValue] = useState<FilterOption>(FilterOption.All)

    const filterOptions: string[] = ["All", "Active", "Archived"]

    // fetch data
    const { data, loading, error } = useTransactionsQuery(
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
                objectID: props.objectID,
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
    const viewAction = (item: Transaction) => {
        router.push(`/settings/transactions/${item.id}`)
    }
    const editAction = (item: Transaction) => {
        router.push(`/settings/transactions/${item.id}/edit`)
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
        <TransactionTableHTML
            data={data?.transactions!}
            viewAction={viewAction}
            editAction={editAction}
            filterAction={filterAction}
            filterOptions={filterOptions}
        />
    )
}
