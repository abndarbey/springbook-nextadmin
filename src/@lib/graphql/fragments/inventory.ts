import { gql } from '@apollo/client'

export const Sku = gql`
    fragment SkuFragment on Sku {
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
        batchCount
        cartonCount
        organization {
            uid
            code
            name
        }
    }
`

export const Batch = gql`
    fragment BatchFragment on Batch {
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
        cartonCount
        sku {
            uid
            code
            name
        }
        organization {
            uid
            code
            name
        }
    }
`

export const Carton = gql`
    fragment CartonFragment on Carton {
        id
        uid
        code
        description
        status
        isFinal
        isArchived
        sku {
            uid
            code
            name
        }
        batch {
            uid
            code
            batchNumber
        }
        warehouse {
            uid
            code
            name
        }
        owner {
            uid
            code
            name
        }
        custodian {
            uid
            code
            name
        }
    }
`