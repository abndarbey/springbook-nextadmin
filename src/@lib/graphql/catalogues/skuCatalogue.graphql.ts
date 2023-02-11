import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const SKU_CATALOGUES = gql`
    query SkuCatalogues($searchFilter: SearchFilter!) {
        skuCatalogues(search: $searchFilter) {
            skuCatalogues {
                    ...SkuCatalogueFragment
                }
                total
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE = gql`
    query SkuCatalogue($uid: UUID, $code: String) {
        skuCatalogue(uid: $uid, code: $code) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_CREATE = gql`
    mutation SkuCatalogueCreate($input: UpdateSkuCatalogue!) {
        skuCatalogueCreate(input: $input) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_UPDATE = gql`
    mutation SkuCatalogueUpdate($uid: UUID!, $input: UpdateSkuCatalogue!) {
        skuCatalogueUpdate(uid: $uid, input: $input) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_FINALIZE = gql`
    mutation SkuCatalogueFinalize($uid: UUID!) {
        skuCatalogueFinalize(uid: $uid) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_ARCHIVE = gql`
    mutation SkuCatalogueArchive($uid: UUID!) {
        skuCatalogueArchive(uid: $uid) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_UNARCHIVE = gql`
    mutation SkuCatalogueUnarchive($uid: UUID!) {
        skuCatalogueUnarchive(uid: $uid) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`