import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const BATCHES = gql`
    query Batches($searchFilter: SearchFilter!, $skuID: ID) {
        batches(search: $searchFilter, skuID: $skuID) {
            batches {
                    ...BatchFragment
                }
                total
            }
        }
    ${fragment.Batch}
`

export const BATCH = gql`
    query Batch($id: ID, $uid: UUID, $code: String) {
        batch(id: $id, uid: $uid, code: $code) {
            ...BatchFragment
            }
        }
    ${fragment.Batch}
`

export const BATCH_CREATE = gql`
    mutation BatchCreate($input: UpdateBatch!) {
        batchCreate(input: $input) {
            ...BatchFragment
            }
        }
    ${fragment.Batch}
`

export const BATCH_UPDATE = gql`
    mutation BatchUpdate($id: ID!, $input: UpdateBatch!) {
        batchUpdate(id: $id, input: $input) {
            ...BatchFragment
            }
        }
    ${fragment.Batch}
`

export const BATCH_ARCHIVE = gql`
    mutation BatchArchive($id: ID!) {
        batchArchive(id: $id) {
            ...BatchFragment
            }
        }
    ${fragment.Batch}
`

export const BATCH_UNARCHIVE = gql`
    mutation BatchUnarchive($id: ID!) {
        batchUnarchive(id: $id) {
            ...BatchFragment
            }
        }
    ${fragment.Batch}
`