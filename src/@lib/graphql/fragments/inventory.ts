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
        owner {
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

// export const Batch = gql`
//     fragment BatchFragment on Batch {
//         id
//         uid
//         code
//         batchNumber
//         description
//         productionDate
//         expiryDate
//         status
//         isFinal
//         isArchived
//         owner {
//             uid
//             code
//             name
//         }
//         organization {
//             uid
//             code
//             name
//         }
//         sku {
//             uid
//             code
//             name
//         }
//     }
// `