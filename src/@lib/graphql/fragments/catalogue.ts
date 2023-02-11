import { gql } from '@apollo/client'

export const SkuCatalogue = gql`
    fragment SkuCatalogueFragment on SkuCatalogue {
        id
        uid
        code
        name
        hsnCode
        brand
        description
        ingredients
        weight
        weightUnit
        masterPhoto {
            name
            url
        }
        parentSkuUID
        isParent
        status
        isFinal
        isArchived
        createdAt
        organization {
            uid
            code
            name
        }
    }
`

export const BatchCatalogue = gql`
    fragment BatchCatalogueFragment on BatchCatalogue {
        id
        uid
        code
        batchNumber
        description
        productionDate
        expiryDate
        status
        isFinal
        isArchived
        organization {
            uid
            code
            name
        }
        sku {
            uid
            code
            name
        }
    }
`