import { gql } from '@apollo/client'

export const SkuCatalogue = gql`
    fragment SkuCatalogueFragment on SkuCatalogue {
        id
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
        parentSkuID
        isParent
        status
        isFinal
        isArchived
        createdAt
        batchCount
        organization {
            id
            code
            name
        }
    }
`

export const BatchCatalogue = gql`
    fragment BatchCatalogueFragment on BatchCatalogue {
        id
        code
        batchNumber
        description
        productionDate
        expiryDate
        status
        isFinal
        isArchived
        organization {
            id
            code
            name
        }
        sku {
            id
            code
            name
        }
    }
`