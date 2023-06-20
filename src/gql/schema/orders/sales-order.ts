import { gql } from '@apollo/client'
import { fragment } from "gql/schema/fragments"

export const SALES_ORDERS = gql`
    query SalesOrders($searchFilter: SearchFilter!, $view: ViewOption) {
        salesOrders(search: $searchFilter, view: $view) {
            salesOrders {
                ...SalesOrderListFragment
            }
            total
        }
    }
    ${fragment.SalesOrderList}
`

export const SALES_ORDER_HISTORY = gql`
    query SalesOrderHistory($searchFilter: SearchFilter!, $soUID: UUID!) {
        salesOrderHistory(search: $searchFilter, soUID: $soUID) {
            salesOrderHistory {
                ...SalesOrderDetailFragment
            }
            total
        }
    }
    ${fragment.SalesOrderDetail}
`

export const SALES_ORDER = gql`
    query SalesOrder($id: ID, $uid: UUID $code: String) {
        salesOrder(id: $id, uid: $uid, code: $code) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_VERSION_HASH = gql`
    query SalesOrderVersionHash($versionUID: UUID!) {
        salesOrderVersionHash(versionUID: $versionUID)
    }
`

export const SALES_ORDER_CREATE = gql`
    mutation SalesOrderCreate($input: CreateSalesOrder!) {
        salesOrderCreate(input: $input) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_FINALIZE = gql`
    mutation SalesOrderFinalize($uid: UUID!) {
        salesOrderFinalize(uid: $uid) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_ARCHIVE = gql`
    mutation SalesOrderArchive($uid: UUID!) {
        salesOrderArchive(uid: $uid) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_UNARCHIVE = gql`
    mutation SalesOrderUnarchive($uid: UUID!) {
        salesOrderUnarchive(uid: $uid) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_VERSION_HASH_VERIFY = gql`
    mutation SalesOrderVersionHashVerify($versionUID: UUID!) {
        salesOrderVersionHashVerify(versionUID: $versionUID)
    }
`
