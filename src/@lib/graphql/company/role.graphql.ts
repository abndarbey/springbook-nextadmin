import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const ROLES = gql`
    query Roles($searchFilter: SearchFilter!, $orgUID: UUID, $deptID: ID) {
        roles(search: $searchFilter, orgUID: $orgUID, deptID: $deptID) {
            roles {
                    ...RoleFragment
                }
                total
            }
        }
    ${fragment.Role}
`

export const ROLE = gql`
    query Role($id: ID, $code: String) {
        role(id: $id, code: $code) {
            ...RoleFragment
            }
        }
    ${fragment.Role}
`

export const ROLE_CREATE = gql`
    mutation RoleCreate($input: UpdateRole!) {
        roleCreate(input: $input) {
            ...RoleFragment
            }
        }
    ${fragment.Role}
`

export const ROLE_UPDATE = gql`
    mutation RoleUpdate($id: ID!, $input: UpdateRole!) {
        roleUpdate(id: $id, input: $input) {
            ...RoleFragment
            }
        }
    ${fragment.Role}
`

export const ROLE_FINALIZE = gql`
    mutation RoleFinalize($id: ID!) {
        roleFinalize(id: $id) {
            ...RoleFragment
            }
        }
    ${fragment.Role}
`

export const ROLE_ARCHIVE = gql`
    mutation RoleArchive($id: ID!) {
        roleArchive(id: $id) {
            ...RoleFragment
            }
        }
    ${fragment.Role}
`

export const ROLE_UNARCHIVE = gql`
    mutation RoleUnarchive($id: ID!) {
        roleUnarchive(id: $id) {
            ...RoleFragment
            }
        }
    ${fragment.Role}
`