import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

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
    query SkuCatalogue($id: ID, $code: String) {
        skuCatalogue(id: $id, code: $code) {
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
    mutation SkuCatalogueUpdate($id: ID!, $input: UpdateSkuCatalogue!) {
        skuCatalogueUpdate(id: $id, input: $input) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_FINALIZE = gql`
    mutation SkuCatalogueFinalize($id: ID!) {
        skuCatalogueFinalize(id: $id) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_ARCHIVE = gql`
    mutation SkuCatalogueArchive($id: ID!) {
        skuCatalogueArchive(id: $id) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`

export const SKU_CATALOGUE_UNARCHIVE = gql`
    mutation SkuCatalogueUnarchive($id: ID!) {
        skuCatalogueUnarchive(id: $id) {
            ...SkuCatalogueFragment
            }
        }
    ${fragment.SkuCatalogue}
`