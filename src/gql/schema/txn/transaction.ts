import { gql } from '@apollo/client'
import { fragment } from "../fragments"

export const TRANSACTIONS = gql`
    query Transactions($searchFilter: SearchFilter!, $objectID: ID) {
        transactions(search: $searchFilter, objectID: $objectID) {
            transactions {
                    ...TransactionFragment
                }
                total
            }
        }
    ${fragment.Transaction}
`
