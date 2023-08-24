import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const SALES_ORDERS = gql`
    query SalesOrders($searchFilter: SearchFilter!, $view: ViewOption, $purchaseOrderID: ID) {
        salesOrders(search: $searchFilter, view: $view, purchaseOrderID: $purchaseOrderID) {
            salesOrders {
                ...SalesOrderListFragment
            }
            total
        }
    }
    ${fragment.SalesOrderList}
`

export const SALES_ORDER_HISTORY = gql`
    query SalesOrderHistory($searchFilter: SearchFilter!, $soID: ID!) {
        salesOrderHistory(search: $searchFilter, soID: $soID) {
            salesOrderHistory {
                ...SalesOrderDetailFragment
            }
            total
        }
    }
    ${fragment.SalesOrderDetail}
`

export const SALES_ORDER = gql`
    query SalesOrder($id: ID, $code: String) {
        salesOrder(id: $id, code: $code) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_VERSION_HASH = gql`
    query SalesOrderVersionHash($versionID: ID!) {
        salesOrderVersionHash(versionID: $versionID)
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
    mutation SalesOrderFinalize($id: ID!) {
        salesOrderFinalize(id: $id) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_ARCHIVE = gql`
    mutation SalesOrderArchive($id: ID!) {
        salesOrderArchive(id: $id) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_UNARCHIVE = gql`
    mutation SalesOrderUnarchive($id: ID!) {
        salesOrderUnarchive(id: $id) {
            ...SalesOrderFragment
        }
    }
    ${fragment.SalesOrder}
`

export const SALES_ORDER_VERSION_HASH_VERIFY = gql`
    mutation SalesOrderVersionHashVerify($versionID: ID!) {
        salesOrderVersionHashVerify(versionID: $versionID)
    }
`
