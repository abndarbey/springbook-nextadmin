import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const WAREHOUSE_CONTRACTS = gql`
    query WarehouseContracts(
        $searchFilter: SearchFilter!,
        $view: ViewOption,
		$contractorUID: UUID, $clientUID: UUID,
		$warehouseUID: UUID,
    ) {
        warehouseContracts(
            search: $searchFilter,
            view: $view,
            contractorUID: $contractorUID, clientUID: $clientUID,
            warehouseUID: $warehouseUID,
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
    query WarehouseContract($uid: UUID, $code: String) {
        warehouseContract(uid: $uid, code: $code) {
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
    mutation WarehouseContractUpdate($uid: UUID!, $input: UpdateWarehouseContract!) {
        warehouseContractUpdate(uid: $uid, input: $input) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_FINALIZE = gql`
    mutation WarehouseContractFinalize($uid: UUID!) {
        warehouseContractFinalize(uid: $uid) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_ACCEPT = gql`
    mutation WarehouseContractAccept($uid: UUID!) {
        warehouseContractAccept(uid: $uid) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_DECLINE = gql`
    mutation WarehouseContractDecline($uid: UUID!) {
        warehouseContractDecline(uid: $uid) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_ARCHIVE = gql`
    mutation WarehouseContractArchive($uid: UUID!) {
        warehouseContractArchive(uid: $uid) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`

export const WAREHOUSE_CONTRACT_UNARCHIVE = gql`
    mutation WarehouseContractUnarchive($uid: UUID!) {
        warehouseContractUnarchive(uid: $uid) {
            ...WarehouseContractFragment
            }
        }
    ${fragment.WarehouseContract}
`