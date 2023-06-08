import { gql } from '@apollo/client'

export const PurchaseOrder = gql`
    fragment PurchaseOrderFragment on PurchaseOrder {
        id
        uid
        code
        totalValue
        isFinal
        isArchived
        createdAt
        buyer {
            uid
            code
            name
        }
        seller {
            uid
            code
            name
        }
        financier {
            uid
            code
            name
        }
        details {
            id
            purchaseOrderUID
            version
            warehouseUID
            requitionerUID
            currency
            addressLine1
            addressLine2
            addressLine3
            city
            country
            pincode
            shippingMethod
            incoterm
            notes
            buyerMessage
            sellerMessage
            shippingTerms
            contractTerms
            documentStatus
            isSellerAccepted
            isFinanceirApproved
            createdAt
            updatedAt
        }
        items {
            id
            purchaseOrderUID
            serial
            units
            unitCost
            unitOfMeasure
            sku {
                id
                uid
                code
                name
            }
        }
    }
`

export const PurchaseOrderList = gql`
    fragment PurchaseOrderListFragment on PurchaseOrder {
        id
        uid
        code
        totalValue
        isFinal
        isArchived
        createdAt
        details {
            currency
            documentStatus
        }
        buyer {
            uid
            code
            name
        }
        seller {
            uid
            code
            name
        }
        financier {
            uid
            code
            name
        }
    }
`
