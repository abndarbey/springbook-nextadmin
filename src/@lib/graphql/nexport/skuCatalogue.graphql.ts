import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

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
