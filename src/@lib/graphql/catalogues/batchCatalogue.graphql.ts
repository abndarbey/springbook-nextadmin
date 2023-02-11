import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const BATCH_CATALOGUES = gql`
    query BatchCatalogues($searchFilter: SearchFilter!) {
        batchCatalogues(search: $searchFilter) {
            batchCatalogues {
                    ...BatchCatalogueFragment
                }
                total
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE = gql`
    query BatchCatalogue($uid: UUID, $code: String) {
        batchCatalogue(uid: $uid, code: $code) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_CREATE = gql`
    mutation BatchCatalogueCreate($input: UpdateBatchCatalogue!) {
        batchCatalogueCreate(input: $input) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_UPDATE = gql`
    mutation BatchCatalogueUpdate($uid: UUID!, $input: UpdateBatchCatalogue!) {
        batchCatalogueUpdate(uid: $uid, input: $input) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_FINALIZE = gql`
    mutation BatchCatalogueFinalize($uid: UUID!) {
        batchCatalogueFinalize(uid: $uid) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_ARCHIVE = gql`
    mutation BatchCatalogueArchive($uid: UUID!) {
        batchCatalogueArchive(uid: $uid) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_UNARCHIVE = gql`
    mutation BatchCatalogueUnarchive($uid: UUID!) {
        batchCatalogueUnarchive(uid: $uid) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`