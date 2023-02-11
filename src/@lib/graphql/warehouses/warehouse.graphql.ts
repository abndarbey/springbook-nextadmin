import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const WAREHOUSES = gql`
    query Warehouses($searchFilter: SearchFilter!, $orgUID: UUID) {
        warehouses(search: $searchFilter, orgUID: $orgUID) {
            warehouses {
                    ...WarehouseFragment
                }
                total
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE = gql`
    query Warehouse($uid: UUID, $code: String) {
        warehouse(uid: $uid, code: $code) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`


export const WAREHOUSE_CREATE = gql`
    mutation WarehouseCreate($input: UpdateWarehouse!) {
        warehouseCreate(input: $input) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`


export const WAREHOUSE_UPDATE = gql`
    mutation WarehouseUpdate($uid: UUID!, $input: UpdateWarehouse!) {
        warehouseUpdate(uid: $uid, input: $input) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE_FINALIZE = gql`
    mutation WarehouseFinalize($uid: UUID!) {
        warehouseFinalize(uid: $uid) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE_ARCHIVE = gql`
    mutation WarehouseArchive($uid: UUID!) {
        warehouseArchive(uid: $uid) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE_UNARCHIVE = gql`
    mutation WarehouseUnarchive($uid: UUID!) {
        warehouseUnarchive(uid: $uid) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`