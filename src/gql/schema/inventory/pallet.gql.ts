import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

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
    query Pallet($id: ID, $code: String) {
        pallet(id: $id, code: $code) {
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
    query PalletTransferLogs($searchFilter: SearchFilter!, $palletID: ID!) {
        palletTransferLogs(search: $searchFilter, palletID: $palletID) {
            palletTransferLogs {
                ...PalletTransferLogFragment
            }
            total
        }
    }
    ${fragment.PalletTransferLog}
`

export const PALLET_TRACKER_LOGS = gql`
    query PalletTrackerLogs($searchFilter: SearchFilter!, $palletID: ID!) {
        palletTrackerLogs(search: $searchFilter, palletID: $palletID) {
            palletTrackerLogs {
                ...PalletTrackerLogFragment
            }
            total
        }
    }
    ${fragment.PalletTrackerLog}
`