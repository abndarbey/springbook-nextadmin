import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const NEXPORT_ORGANIZATIONS = gql`
    query NexportOrganizations($searchFilter: SearchFilter!, $sector: String) {
        nexportOrganizations(search: $searchFilter, sector: $sector) {
            organizations {
                    ...OrganizationFragment
                }
                total
            }
        }
    ${fragment.Organization}
`

export const NEXPORT_SKU_CATALOGUES = gql`
    query NexportSkuCatalogues($searchFilter: SearchFilter!) {
        nexportSkuCatalogues(search: $searchFilter) {
            skuCatalogues {
                    ...SkuCatalogueFragment
                }
                total
            }
        }
    ${fragment.SkuCatalogue}
`

export const NEXPORT_BATCH_CATALOGUES = gql`
    query NexportBatchCatalogues($searchFilter: SearchFilter!, $skuID: ID) {
        nexportBatchCatalogues(search: $searchFilter, skuID: $skuID) {
            batchCatalogues {
                    ...BatchCatalogueFragment
                }
                total
            }
        }
    ${fragment.BatchCatalogue}
`
