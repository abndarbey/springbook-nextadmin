import { gql } from '@apollo/client'

export const Transaction = gql`
    fragment TransactionFragment on Transaction {
        id
        name
        objectType
        scannedAt
        geoLocation {
            lat
            lon
        }
        # documentHash
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
            name
        }
        manifest {
            id
        }
        carton {
            id
            code
        }
        pallet {
            id
            code
        }
    }
`