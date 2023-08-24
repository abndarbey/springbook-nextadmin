import { gql } from '@apollo/client'

export const PurchaseOrder = gql`
    fragment PurchaseOrderFragment on PurchaseOrder {
        id
        code
        totalValue
        isFinal
        isArchived
        createdAt
        buyer {
            id
            code
            name
            website
        }
        seller {
            id
            code
            name
            website
        }
        financier {
            id
            code
            name
            website
        }
        details {
            id
            purchaseOrderID
            version
            warehouse {
                id
                code
                locality
                city
                pincode
            }
            requitioner {
                id
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
            purchaseOrderID
            serial
            units
            unitCost
            unitOfMeasure
            sku {
                id
                code
                name
            }
        }
    }
`

export const PurchaseOrderList = gql`
    fragment PurchaseOrderListFragment on PurchaseOrder {
        id
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
            id
            code
            name
        }
        seller {
            id
            code
            name
        }
        financier {
            id
            code
            name
        }
    }
`

export const PurchaseOrderDetail = gql`
    fragment PurchaseOrderDetailFragment on PurchaseOrderDetail {
        id
        purchaseOrderID
        version
        warehouse {
            id
            code
            locality
            city
            pincode
        }
        requitioner {
            id
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
        code
        totalValue
        isFinal
        isArchived
        createdAt
        buyer {
            id
            code
            name
            website
        }
        seller {
            id
            code
            name
            website
        }
        financier {
            id
            code
            name
            website
        }
        details {
            id
            salesOrderID
            version
            warehouse {
                id
                code
                locality
                city
                pincode
            }
            requitioner {
                id
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
            salesOrderID
            serial
            units
            unitCost
            unitOfMeasure
            sku {
                id
                id
                code
                name
            }
        }
        purchaseOrder {
            id
            id
            code
        }
    }
`

export const SalesOrderList = gql`
    fragment SalesOrderListFragment on SalesOrder {
        id
        id
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
            id
            code
            name
        }
        seller {
            id
            code
            name
        }
        financier {
            id
            code
            name
        }
        purchaseOrder {
            id
            code
        }
    }
`

export const SalesOrderDetail = gql`
    fragment SalesOrderDetailFragment on SalesOrderDetail {
        id
        salesOrderID
        version
        warehouse {
            id
            code
            locality
            city
            pincode
        }
        requitioner {
            id
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
