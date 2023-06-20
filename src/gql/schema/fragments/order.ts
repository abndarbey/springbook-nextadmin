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
            website
        }
        seller {
            uid
            code
            name
            website
        }
        financier {
            uid
            code
            name
            website
        }
        details {
            id
            purchaseOrderUID
            version
            warehouse {
                uid
                code
                locality
                city
                pincode
            }
            requitioner {
                uid
                code
                name
                website
            }
            currency
            shippingAddress
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
            sellerAcceptedStatus
            isFinancierApproved
            financierApprovedStatus
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

export const PurchaseOrderDetail = gql`
    fragment PurchaseOrderDetailFragment on PurchaseOrderDetail {
        id
        uid
        purchaseOrderUID
        version
        warehouse {
            uid
            code
            locality
            city
            pincode
        }
        requitioner {
            uid
            code
            name
            website
        }
        currency
        shippingAddress
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
        sellerAcceptedStatus
        isFinancierApproved
        financierApprovedStatus
        createdAt
        updatedAt
    }
`

export const SalesOrder = gql`
    fragment SalesOrderFragment on SalesOrder {
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
            website
        }
        seller {
            uid
            code
            name
            website
        }
        financier {
            uid
            code
            name
            website
        }
        details {
            id
            salesOrderUID
            version
            warehouse {
                uid
                code
                locality
                city
                pincode
            }
            requitioner {
                uid
                code
                name
                website
            }
            currency
            shippingAddress
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
            createdAt
            updatedAt
        }
        items {
            id
            salesOrderUID
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
        purchaseOrder {
            id
            uid
            code
        }
    }
`

export const SalesOrderList = gql`
    fragment SalesOrderListFragment on SalesOrder {
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
        purchaseOrder {
            id
            uid
            code
        }
    }
`

export const SalesOrderDetail = gql`
    fragment SalesOrderDetailFragment on SalesOrderDetail {
        id
        uid
        salesOrderUID
        version
        warehouse {
            uid
            code
            locality
            city
            pincode
        }
        requitioner {
            uid
            code
            name
            website
        }
        currency
        shippingAddress
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
        createdAt
        updatedAt
    }
`
