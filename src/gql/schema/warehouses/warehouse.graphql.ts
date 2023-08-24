import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const WAREHOUSES = gql`
    query Warehouses($searchFilter: SearchFilter!, $typeID: ID, $isThirdParty: Boolean) {
        warehouses(search: $searchFilter, typeID: $typeID, isThirdParty: $isThirdParty) {
            warehouses {
                    ...WarehouseFragment
                }
                total
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE = gql`
    query Warehouse($id: ID, $code: String) {
        warehouse(id: $id, code: $code) {
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
    mutation WarehouseUpdate($id: ID!, $input: UpdateWarehouse!) {
        warehouseUpdate(id: $id, input: $input) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE_FINALIZE = gql`
    mutation WarehouseFinalize($id: ID!) {
        warehouseFinalize(id: $id) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE_ARCHIVE = gql`
    mutation WarehouseArchive($id: ID!) {
        warehouseArchive(id: $id) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`

export const WAREHOUSE_UNARCHIVE = gql`
    mutation WarehouseUnarchive($id: ID!) {
        warehouseUnarchive(id: $id) {
            ...WarehouseFragment
            }
        }
    ${fragment.Warehouse}
`