import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const WAREHOUSE_CONTRACTS = gql`
    query WarehouseContracts(
        $searchFilter: SearchFilter!,
        $view: ViewOption,
		$contractorID: ID, $clientID: ID,
		$warehouseID: ID,
    ) {
        warehouseContracts(
            search: $searchFilter,
            view: $view,
            contractorID: $contractorID, clientID: $clientID,
            warehouseID: $warehouseID,
        ) {
            warehouseContracts {
                    ...WarehouseContractFragment
                }
                total
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT = gql`
    query WarehouseContract($id: ID, $code: String) {
        warehouseContract(id: $id, code: $code) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`


export const WAREHOUSE_CONTRACT_CREATE = gql`
    mutation WarehouseContractCreate($input: UpdateWarehouseContract!) {
        warehouseContractCreate(input: $input) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`


export const WAREHOUSE_CONTRACT_UPDATE = gql`
    mutation WarehouseContractUpdate($id: ID!, $input: UpdateWarehouseContract!) {
        warehouseContractUpdate(id: $id, input: $input) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_FINALIZE = gql`
    mutation WarehouseContractFinalize($id: ID!) {
        warehouseContractFinalize(id: $id) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_ACCEPT = gql`
    mutation WarehouseContractAccept($id: ID!) {
        warehouseContractAccept(id: $id) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_DECLINE = gql`
    mutation WarehouseContractDecline($id: ID!) {
        warehouseContractDecline(id: $id) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_ARCHIVE = gql`
    mutation WarehouseContractArchive($id: ID!) {
        warehouseContractArchive(id: $id) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_UNARCHIVE = gql`
    mutation WarehouseContractUnarchive($id: ID!) {
        warehouseContractUnarchive(id: $id) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`