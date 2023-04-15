import { gql } from '@apollo/client'

export const Transaction = gql`
    fragment TransactionFragment on Transaction {
        id
        uid
        name
        objectType
        scannedAt
        geoLocation {
            lat
            lon
        }
        memo
        isPending
        manifestLineJson
        manifestLineSha256
        transactionHash
        isFinal
        isArchived
        createdAt
        creator {
            id
            firstName
            lastName
        }
        organization {
            id
            uid
            name
        }
        manifest {
            id
        }
        carton {
            id
            uid
            code
        }
        pallet {
            id
            uid
            code
        }
    }
`