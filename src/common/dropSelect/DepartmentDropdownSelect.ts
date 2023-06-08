import { FilterOption, SortByOption, SortDir, useDepartmentsQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { SelectFieldData } from "types/types"

export default function DepartmentDropdownSelect() {
    const selectData: SelectFieldData[] = []

    // fetch departments
    const { data, loading, error } = useDepartmentsQuery(
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
    if (!loading && data?.departments?.departments) {
        data?.departments?.departments.map((item) => {
            let obj: SelectFieldData = {
                value: item.id,
                label: item.name,
            }
            selectData.push(obj)
        })
    }
    
    return selectData
}