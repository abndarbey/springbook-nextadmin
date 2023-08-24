import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const PURCHASE_ORDERS = gql`
    query PurchaseOrders($searchFilter: SearchFilter!, $view: ViewOption) {
        purchaseOrders(search: $searchFilter, view: $view) {
            purchaseOrders {
                    ...PurchaseOrderListFragment
                }
                total
            }
        }
    ${fragment.PurchaseOrderList}
`

export const PURCHASE_ORDER_HISTORY = gql`
    query PurchaseOrderHistory($searchFilter: SearchFilter!, $poID: ID!) {
        purchaseOrderHistory(search: $searchFilter, poID: $poID) {
            purchaseOrderHistory {
                    ...PurchaseOrderDetailFragment
                }
                total
            }
        }
    ${fragment.PurchaseOrderDetail}
`

export const PURCHASE_ORDER = gql`
    query PurchaseOrder($id: ID, $code: String) {
        purchaseOrder(id: $id, code: $code) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_VERSION_HASH = gql`
    query PurchaseOrderVersionHash($versionID: ID!) {
        purchaseOrderVersionHash(versionID: $versionID)
    }
`

export const PURCHASE_ORDER_CREATE = gql`
    mutation PurchaseOrderCreate($input: UpdatePurchaseOrder!) {
        purchaseOrderCreate(input: $input) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_UPDATE = gql`
    mutation UpdatePurchaseOrderUpdate($id: ID!, $input: UpdatePurchaseOrder!) {
        purchaseOrderUpdate(id: $id, input: $input) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_FINALIZE = gql`
    mutation PurchaseOrderFinalize($id: ID!) {
        purchaseOrderFinalize(id: $id) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_SELLER_ACCEPT = gql`
    mutation PurchaseOrderSellerAccept($id: ID!, $acceptance: Boolean!) {
        purchaseOrderSellerAccept(id: $id, acceptance: $acceptance) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_ARCHIVE = gql`
    mutation PurchaseOrderArchive($id: ID!) {
        purchaseOrderArchive(id: $id) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_UNARCHIVE = gql`
    mutation PurchaseOrderUnarchive($id: ID!) {
        purchaseOrderUnarchive(id: $id) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_VERSION_HASH_VERIFY = gql`
    mutation PurchaseOrderVersionHashVerify($versionID: ID!) {
        purchaseOrderVersionHashVerify(versionID: $versionID)
    }
`
