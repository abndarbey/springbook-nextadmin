import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const DEPARTMENTS = gql`
    query Departments($searchFilter: SearchFilter!, $orgUID: UUID) {
        departments(search: $searchFilter, orgUID: $orgUID) {
            departments {
                    ...DepartmentFragment
                }
                total
            }
        }
    ${fragment.Department}
`

export const DEPARTMENT = gql`
    query Department($id: ID, $code: String) {
        department(id: $id, code: $code) {
            ...DepartmentFragment
            }
        }
    ${fragment.Department}
`

export const DEPARTMENT_CREATE = gql`
    mutation DepartmentCreate($input: UpdateDepartment!) {
        departmentCreate(input: $input) {
            ...DepartmentFragment
            }
        }
    ${fragment.Department}
`

export const DEPARTMENT_UPDATE = gql`
    mutation DepartmentUpdate($id: ID!, $input: UpdateDepartment!) {
        departmentUpdate(id: $id, input: $input) {
            ...DepartmentFragment
            }
        }
    ${fragment.Department}
`

export const DEPARTMENT_FINALIZE = gql`
    mutation DepartmentFinalize($id: ID!) {
        departmentFinalize(id: $id) {
            ...DepartmentFragment
            }
        }
    ${fragment.Department}
`

export const DEPARTMENT_ARCHIVE = gql`
    mutation DepartmentArchive($id: ID!) {
        departmentArchive(id: $id) {
            ...DepartmentFragment
            }
        }
    ${fragment.Department}
`

export const DEPARTMENT_UNARCHIVE = gql`
    mutation DepartmentUnarchive($id: ID!) {
        departmentUnarchive(id: $id) {
            ...DepartmentFragment
            }
        }
    ${fragment.Department}
`