import { gql } from '@apollo/client'
import { fragment } from "gql/schema/fragments"

export const QR_ORDERS = gql`
    query QROrders($searchFilter: SearchFilter!, $objectType: String) {
        qrOrders(search: $searchFilter, objectType: $objectType) {
            qrOrders {
                    ...QROrderFragment
                }
                total
            }
        }
    ${fragment.QROrder}
`

export const QR_ORDER_OBJECTS = gql`
    query QROrderObjects($searchFilter: SearchFilter!, $qrOrderUID: UUID!) {
        qrOrderObjects(search: $searchFilter, qrOrderUID: $qrOrderUID) {
            qrOrderObjects {
                    ...QROrderObjectFragment
                }
                total
            }
        }
    ${fragment.QROrderObject}
`

export const QR_ORDER = gql`
    query QROrder($id: ID, $code: String) {
        qrOrder(id: $id, code: $code) {
            ...QROrderFragment
            }
        }
    ${fragment.QROrder}
`

export const QR_ORDER_CREATE = gql`
    mutation QROrderCreate($input: UpdateQROrder!) {
        qrOrderCreate(input: $input) {
            ...QROrderFragment
            }
        }
    ${fragment.QROrder}
`

export const QR_ORDER_UPDATE = gql`
    mutation UpdateQROrderUpdate($id: ID!, $input: UpdateQROrder!) {
        qrOrderUpdate(id: $id, input: $input) {
            ...QROrderFragment
            }
        }
    ${fragment.QROrder}
`

export const QR_ORDER_FINALIZE = gql`
    mutation QROrderFinalize($id: ID!) {
        qrOrderFinalize(id: $id) {
            ...QROrderFragment
            }
        }
    ${fragment.QROrder}
`

export const QR_ORDER_ARCHIVE = gql`
    mutation QROrderArchive($id: ID!) {
        qrOrderArchive(id: $id) {
            ...QROrderFragment
            }
        }
    ${fragment.QROrder}
`

export const QR_ORDER_UNARCHIVE = gql`
    mutation QROrderUnarchive($id: ID!) {
        qrOrderUnarchive(id: $id) {
            ...QROrderFragment
            }
        }
    ${fragment.QROrder}
`