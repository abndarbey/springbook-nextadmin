import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const RACKS = gql`
    query Racks($searchFilter: SearchFilter!) {
        racks(search: $searchFilter) {
            racks {
                    ...RackFragment
                }
                total
            }
        }
    ${fragment.Rack}
`

export const RACK = gql`
    query Rack($id: ID, $code: String) {
        rack(id: $id, code: $code) {
            ...RackFragment
            }
        }
    ${fragment.Rack}
`


export const RACK_CREATE = gql`
    mutation RackCreate($input: UpdateRack!) {
        rackCreate(input: $input) {
            ...RackFragment
            }
        }
    ${fragment.Rack}
`


export const RACK_UPDATE = gql`
    mutation RackUpdate($id: ID!, $input: UpdateRack!) {
        rackUpdate(id: $id, input: $input) {
            ...RackFragment
            }
        }
    ${fragment.Rack}
`

export const RACK_FINALIZE = gql`
    mutation RackFinalize($id: ID!) {
        rackFinalize(id: $id) {
            ...RackFragment
            }
        }
    ${fragment.Rack}
`

export const RACK_ARCHIVE = gql`
    mutation RackArchive($id: ID!) {
        rackArchive(id: $id) {
            ...RackFragment
            }
        }
    ${fragment.Rack}
`

export const RACK_UNARCHIVE = gql`
    mutation RackUnarchive($id: ID!) {
        rackUnarchive(id: $id) {
            ...RackFragment
            }
        }
    ${fragment.Rack}
`