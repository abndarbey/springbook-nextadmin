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
    query Pallet($uid: UUID, $code: String) {
        pallet(uid: $uid, code: $code) {
            ...PalletFragment
            }
        }
    ${fragment.Pallet}
`

export const PALLET_CREATE = gql`
    mutation PalletCreate($input: UpdatePallet!) {
        palletCreate(input: $input) {
            ...PalletFragment
            }
        }
    ${fragment.Pallet}
`

export const PALLET_UPDATE = gql`
    mutation PalletUpdate($uid: UUID!, $input: UpdatePallet!) {
        palletUpdate(uid: $uid, input: $input) {
            ...PalletFragment
            }
        }
    ${fragment.Pallet}
`

export const PALLET_FINALIZE = gql`
    mutation PalletFinalize($uid: UUID!) {
        palletFinalize(uid: $uid) {
            ...PalletFragment
            }
        }
    ${fragment.Pallet}
`

export const PALLET_ARCHIVE = gql`
    mutation PalletArchive($uid: UUID!) {
        palletArchive(uid: $uid) {
            ...PalletFragment
            }
        }
    ${fragment.Pallet}
`

export const PALLET_UNARCHIVE = gql`
    mutation PalletUnarchive($uid: UUID!) {
        palletUnarchive(uid: $uid) {
            ...PalletFragment
            }
        }
    ${fragment.Pallet}
`