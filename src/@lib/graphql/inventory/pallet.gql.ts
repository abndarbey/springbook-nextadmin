import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const PALLETS = gql`
    query Pallets($searchFilter: SearchFilter!) {
        pallets(search: $searchFilter) {
            pallets {
                ...PalletFragment
            }
            total
        }
    }
    ${fragment.Pallet}
`

export const PALLET = gql`
    query Pallet($id: ID, $uid: UUID, $code: String) {
        pallet(id: $id, uid: $uid, code: $code) {
            ...PalletFragment
        }
    }
    ${fragment.Pallet}
`

export const PALLET_UPDATE = gql`
    mutation PalletUpdate($id: ID!, $input: UpdatePallet!) {
        palletUpdate(id: $id, input: $input) {
            ...PalletFragment
        }
    }
    ${fragment.Pallet}
`

export const PALLET_ARCHIVE = gql`
    mutation PalletArchive($id: ID!) {
        palletArchive(id: $id) {
            ...PalletFragment
        }
    }
    ${fragment.Pallet}
`

export const PALLET_UNARCHIVE = gql`
    mutation PalletUnarchive($id: ID!) {
        palletUnarchive(id: $id) {
        ...PalletFragment
        }
    }
    ${fragment.Pallet}
`

//////////////////////////
// Pallet Transfer Log ///
//////////////////////////

export const PALLET_TRANSFER_LOGS = gql`
    query PalletTransferLogs($searchFilter: SearchFilter!, $palletUID: UUID!) {
        palletTransferLogs(search: $searchFilter, palletUID: $palletUID) {
            palletTransferLogs {
                ...PalletTransferLogFragment
            }
            total
        }
    }
    ${fragment.PalletTransferLog}
`

export const PALLET_TRACKER_LOGS = gql`
    query PalletTrackerLogs($searchFilter: SearchFilter!, $palletUID: UUID!) {
        palletTrackerLogs(search: $searchFilter, palletUID: $palletUID) {
            palletTrackerLogs {
                ...PalletTrackerLogFragment
            }
            total
        }
    }
    ${fragment.PalletTrackerLog}
`