import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const BATCH_CATALOGUES = gql`
    query BatchCatalogues($searchFilter: SearchFilter!, $skuID: ID) {
        batchCatalogues(search: $searchFilter, skuID: $skuID) {
            batchCatalogues {
                    ...BatchCatalogueFragment
                }
                total
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE = gql`
    query BatchCatalogue($id: ID, $code: String) {
        batchCatalogue(id: $id, code: $code) {
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
    mutation BatchCatalogueUpdate($id: ID!, $input: UpdateBatchCatalogue!) {
        batchCatalogueUpdate(id: $id, input: $input) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_FINALIZE = gql`
    mutation BatchCatalogueFinalize($id: ID!) {
        batchCatalogueFinalize(id: $id) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_ARCHIVE = gql`
    mutation BatchCatalogueArchive($id: ID!) {
        batchCatalogueArchive(id: $id) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`

export const BATCH_CATALOGUE_UNARCHIVE = gql`
    mutation BatchCatalogueUnarchive($id: ID!) {
        batchCatalogueUnarchive(id: $id) {
            ...BatchCatalogueFragment
            }
        }
    ${fragment.BatchCatalogue}
`