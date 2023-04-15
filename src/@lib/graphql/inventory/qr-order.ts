import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const QR_ORDERS = gql`
    query QrOrders($searchFilter: SearchFilter!, $objectType: String) {
        qrOrders(search: $searchFilter, objectType: $objectType) {
            qrOrders {
                    ...QrOrderFragment
                }
                total
            }
        }
    ${fragment.QrOrder}
`

export const QR_ORDER = gql`
    query QrOrder($id: ID, $code: String) {
        qrOrder(id: $id, code: $code) {
            ...QrOrderFragment
            }
        }
    ${fragment.QrOrder}
`

export const QR_ORDER_CREATE = gql`
    mutation QrOrderCreate($input: UpdateQrOrder!) {
        qrOrderCreate(input: $input) {
            ...QrOrderFragment
            }
        }
    ${fragment.QrOrder}
`

export const QR_ORDER_UPDATE = gql`
    mutation UpdateQrOrderUpdate($id: ID!, $input: UpdateQrOrder!) {
        qrOrderUpdate(id: $id, input: $input) {
            ...QrOrderFragment
            }
        }
    ${fragment.QrOrder}
`

export const QR_ORDER_FINALIZE = gql`
    mutation QrOrderFinalize($id: ID!) {
        qrOrderFinalize(id: $id) {
            ...QrOrderFragment
            }
        }
    ${fragment.QrOrder}
`

export const QR_ORDER_ARCHIVE = gql`
    mutation QrOrderArchive($id: ID!) {
        qrOrderArchive(id: $id) {
            ...QrOrderFragment
            }
        }
    ${fragment.QrOrder}
`

export const QR_ORDER_UNARCHIVE = gql`
    mutation QrOrderUnarchive($id: ID!) {
        qrOrderUnarchive(id: $id) {
            ...QrOrderFragment
            }
        }
    ${fragment.QrOrder}
`