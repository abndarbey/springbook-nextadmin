import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const WAREHOUSE_TYPES = gql`
    query WarehouseTypes($searchFilter: SearchFilter!, $orgUID: UUID) {
        warehouseTypes(search: $searchFilter, orgUID: $orgUID) {
            warehouseTypes {
                    ...WarehouseTypeFragment
                }
                total
            }
        }
    ${fragment.WarehouseType}
`

export const WAREHOUSE_TYPE = gql`
    query WarehouseType($id: ID, $code: String) {
        warehouseType(id: $id, code: $code) {
            ...WarehouseTypeFragment
            }
        }
    ${fragment.WarehouseType}
`

export const WAREHOUSE_TYPE_CREATE = gql`
    mutation WarehouseTypeCreate($input: UpdateWarehouseType!) {
        warehouseTypeCreate(input: $input) {
            ...WarehouseTypeFragment
            }
        }
    ${fragment.WarehouseType}
`

export const WAREHOUSE_TYPE_UPDATE = gql`
    mutation WarehouseTypeUpdate($id: ID!, $input: UpdateWarehouseType!) {
        warehouseTypeUpdate(id: $id, input: $input) {
            ...WarehouseTypeFragment
            }
        }
    ${fragment.WarehouseType}
`

export const WAREHOUSE_TYPE_FINALIZE = gql`
    mutation WarehouseTypeFinalize($id: ID!) {
        warehouseTypeFinalize(id: $id) {
            ...WarehouseTypeFragment
            }
        }
    ${fragment.WarehouseType}
`

export const WAREHOUSE_TYPE_ARCHIVE = gql`
    mutation WarehouseTypeArchive($id: ID!) {
        warehouseTypeArchive(id: $id) {
            ...WarehouseTypeFragment
            }
        }
    ${fragment.WarehouseType}
`

export const WAREHOUSE_TYPE_UNARCHIVE = gql`
    mutation WarehouseTypeUnarchive($id: ID!) {
        warehouseTypeUnarchive(id: $id) {
            ...WarehouseTypeFragment
            }
        }
    ${fragment.WarehouseType}
`