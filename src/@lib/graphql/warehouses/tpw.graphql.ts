import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const ThirdPartyWarehouseS = gql`
    query ThirdPartyWarehouses($searchFilter: SearchFilter!) {
        thirdPartyWarehouses(search: $searchFilter) {
            thirdPartyWarehouses {
                    ...ThirdPartyWarehouseFragment
                }
                total
            }
        }
    ${fragment.ThirdPartyWarehouse}
`

export const ThirdPartyWarehouse = gql`
    query ThirdPartyWarehouse($id: ID, $code: String) {
        thirdPartyWarehouse(id: $id, code: $code) {
            ...ThirdPartyWarehouseFragment
            }
        }
    ${fragment.ThirdPartyWarehouse}
`


export const THIRDPARTYWAREHOUSE_CREATE = gql`
    mutation ThirdPartyWarehouseCreate($input: UpdateThirdPartyWarehouse!) {
        thirdPartyWarehouseCreate(input: $input) {
            ...ThirdPartyWarehouseFragment
            }
        }
    ${fragment.ThirdPartyWarehouse}
`


export const THIRD_PARTY_WAREHOUSE_UPDATE = gql`
    mutation ThirdPartyWarehouseUpdate($id: ID!, $input: UpdateThirdPartyWarehouse!) {
        thirdPartyWarehouseUpdate(id: $id, input: $input) {
            ...ThirdPartyWarehouseFragment
            }
        }
    ${fragment.ThirdPartyWarehouse}
`

export const THIRD_PARTY_WAREHOUSE_FINALIZE = gql`
    mutation ThirdPartyWarehouseFinalize($id: ID!) {
        thirdPartyWarehouseFinalize(id: $id) {
            ...ThirdPartyWarehouseFragment
            }
        }
    ${fragment.ThirdPartyWarehouse}
`

export const THIRD_PARTY_WAREHOUSE_ARCHIVE = gql`
    mutation ThirdPartyWarehouseArchive($id: ID!) {
        thirdPartyWarehouseArchive(id: $id) {
            ...ThirdPartyWarehouseFragment
            }
        }
    ${fragment.ThirdPartyWarehouse}
`

export const THIRD_PARTY_WAREHOUSE_UNARCHIVE = gql`
    mutation ThirdPartyWarehouseUnarchive($id: ID!) {
        thirdPartyWarehouseUnarchive(id: $id) {
            ...ThirdPartyWarehouseFragment
            }
        }
    ${fragment.ThirdPartyWarehouse}
`