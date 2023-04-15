import { gql } from '@apollo/client'
import { fragment } from "../fragments"

export const TRANSACTIONS = gql`
    query Transactions($searchFilter: SearchFilter!, $objectUID: UUID) {
        transactions(search: $searchFilter, objectUID: $objectUID) {
            transactions {
                    ...TransactionFragment
                }
                total
            }
        }
    ${fragment.Transaction}
`
