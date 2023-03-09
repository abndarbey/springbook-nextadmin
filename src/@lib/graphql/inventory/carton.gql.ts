import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const CARTONS = gql`
    query Cartons($searchFilter: SearchFilter!, $orgUID: UUID, $skuUID: UUID, $batchUID: UUID, $warehouseUID: UUID) {
        cartons(search: $searchFilter, orgUID: $orgUID, skuUID: $skuUID, batchUID: $batchUID, warehouseUID: $warehouseUID) {
            cartons {
                ...CartonFragment
            }
            total
        }
    }
    ${fragment.Carton}
`

export const CARTON = gql`
    query Carton($id: ID, $uid: UUID, $code: String) {
        carton(id: $id, uid: $uid, code: $code) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_CREATE = gql`
    mutation CartonCreate($input: UpdateCarton!) {
        cartonCreate(input: $input)
    }
`

export const CARTON_UPDATE = gql`
    mutation CartonUpdate($id: ID!, $input: UpdateCarton!) {
        cartonUpdate(id: $id, input: $input) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_ARCHIVE = gql`
    mutation CartonArchive($id: ID!) {
        cartonArchive(id: $id) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_UNARCHIVE = gql`
    mutation CartonUnarchive($id: ID!) {
        cartonUnarchive(id: $id) {
        ...CartonFragment
        }
    }
    ${fragment.Carton}
`