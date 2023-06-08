import { FilterOption, SortByOption, SortDir, useOrganizationsQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { SelectFieldData } from "types/types"

export default function OrgDropdownSelect() {
    const selectData: SelectFieldData[] = []

    // fetch organizations
    const { data, loading, error } = useOrganizationsQuery(
        {
            variables: {
                searchFilter: {
                    sortBy: SortByOption.DateCreated,
                    sortDir: SortDir.Ascending,
                    filter: FilterOption.Active,
                    limit: 100,
                    offset: 0,
                },
            }
        }
    )
    if (!loading && error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: error.message,
        })
    }
    if (!loading && data?.organizations?.organizations) {
        data?.organizations?.organizations.map((item) => {
            let obj: SelectFieldData = {
                value: item.uid,
                label: item.name,
            }
            selectData.push(obj)
        })
    }
    
    return selectData
}