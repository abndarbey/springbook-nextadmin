import { gql } from '@apollo/client'
import { fragment } from "gql/schema/fragments"

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
    query PurchaseOrderHistory($searchFilter: SearchFilter!, $poUID: UUID!) {
        purchaseOrderHistory(search: $searchFilter, poUID: $poUID) {
            purchaseOrderHistory {
                    ...PurchaseOrderDetailFragment
                }
                total
            }
        }
    ${fragment.PurchaseOrderDetail}
`

export const PURCHASE_ORDER = gql`
    query PurchaseOrder($id: ID, $uid: UUID $code: String) {
        purchaseOrder(id: $id, uid: $uid, code: $code) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_VERSION_HASH = gql`
    query PurchaseOrderVersionHash($versionUID: UUID!) {
        purchaseOrderVersionHash(versionUID: $versionUID)
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
    mutation UpdatePurchaseOrderUpdate($uid: UUID!, $input: UpdatePurchaseOrder!) {
        purchaseOrderUpdate(uid: $uid, input: $input) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_FINALIZE = gql`
    mutation PurchaseOrderFinalize($uid: UUID!) {
        purchaseOrderFinalize(uid: $uid) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_SELLER_ACCEPT = gql`
    mutation PurchaseOrderSellerAccept($uid: UUID!, $acceptance: Boolean!) {
        purchaseOrderSellerAccept(uid: $uid, acceptance: $acceptance) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_ARCHIVE = gql`
    mutation PurchaseOrderArchive($uid: UUID!) {
        purchaseOrderArchive(uid: $uid) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_UNARCHIVE = gql`
    mutation PurchaseOrderUnarchive($uid: UUID!) {
        purchaseOrderUnarchive(uid: $uid) {
            ...PurchaseOrderFragment
            }
        }
    ${fragment.PurchaseOrder}
`

export const PURCHASE_ORDER_VERSION_HASH_VERIFY = gql`
    mutation PurchaseOrderVersionHashVerify($versionUID: UUID!) {
        purchaseOrderVersionHashVerify(versionUID: $versionUID)
    }
`
