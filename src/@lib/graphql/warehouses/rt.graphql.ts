import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const RACK_TYPES = gql`
    query RackTypes($searchFilter: SearchFilter!) {
        rackTypes(search: $searchFilter) {
            rackTypes {
                    ...RackTypeFragment
                }
                total
            }
        }
    ${fragment.RackType}
`

export const RACK_TYPE = gql`
    query RackType($id: ID, $code: String) {
        rackType(id: $id, code: $code) {
            ...RackTypeFragment
            }
        }
    ${fragment.RackType}
`


export const RACK_TYPE_CREATE = gql`
    mutation RackTypeCreate($input: UpdateRackType!) {
        rackTypeCreate(input: $input) {
            ...RackTypeFragment
            }
        }
    ${fragment.RackType}
`


export const RACK_TYPE_UPDATE = gql`
    mutation RackTypeUpdate($id: ID!, $input: UpdateRackType!) {
        rackTypeUpdate(id: $id, input: $input) {
            ...RackTypeFragment
            }
        }
    ${fragment.RackType}
`

export const RACK_TYPE_FINALIZE = gql`
    mutation RackTypeFinalize($id: ID!) {
        rackTypeFinalize(id: $id) {
            ...RackTypeFragment
            }
        }
    ${fragment.RackType}
`

export const RACK_TYPE_ARCHIVE = gql`
    mutation RackTypeArchive($id: ID!) {
        rackTypeArchive(id: $id) {
            ...RackTypeFragment
            }
        }
    ${fragment.RackType}
`

export const RACK_TYPE_UNARCHIVE = gql`
    mutation RackTypeUnarchive($id: ID!) {
        rackTypeUnarchive(id: $id) {
            ...RackTypeFragment
            }
        }
    ${fragment.RackType}
`