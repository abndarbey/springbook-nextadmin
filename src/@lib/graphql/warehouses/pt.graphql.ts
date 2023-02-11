import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const PALLET_TYPES = gql`
    query PalletTypes($searchFilter: SearchFilter!) {
        palletTypes(search: $searchFilter) {
            palletTypes {
                    ...PalletTypeFragment
                }
                total
            }
        }
    ${fragment.PalletType}
`

export const PALLET_TYPE = gql`
    query PalletType($id: ID, $code: String) {
        palletType(id: $id, code: $code) {
            ...PalletTypeFragment
            }
        }
    ${fragment.PalletType}
`

export const PALLET_TYPE_CREATE = gql`
    mutation PalletTypeCreate($input: UpdatePalletType!) {
        palletTypeCreate(input: $input) {
            ...PalletTypeFragment
            }
        }
    ${fragment.Pallet}
`

export const PALLET_TYPE_UPDATE = gql`
    mutation PalletTypeUpdate($id: ID!, $input: UpdatePalletType!) {
        palletTypeUpdate(id: $id, input: $input) {
            ...PalletTypeFragment
            }
        }
    ${fragment.PalletType}
`

export const PALLET_TYPE_FINALIZE = gql`
    mutation PalletTypeFinalize($id: ID!) {
        palletTypeFinalize(id: $id) {
            ...PalletTypeFragment
            }
        }
    ${fragment.PalletType}
`

export const PALLET_TYPE_ARCHIVE = gql`
    mutation PalletTypeArchive($id: ID!) {
        palletTypeArchive(id: $id) {
            ...PalletTypeFragment
            }
        }
    ${fragment.PalletType}
`

export const PALLET_TYPE_UNARCHIVE = gql`
    mutation PalletTypeUnarchive($id: ID!) {
        palletTypeUnarchive(id: $id) {
            ...PalletTypeFragment
            }
        }
    ${fragment.PalletType}
`