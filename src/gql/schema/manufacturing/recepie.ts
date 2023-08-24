import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const RECEPIES = gql`
    query Recepies($searchFilter: SearchFilter!) {
        recepies(search: $searchFilter) {
            recepies {
                    ...RecepieListFragment
                }
                total
            }
        }
    ${fragment.RecepieList}
`

export const RECEPIE = gql`
    query Recepie($id: ID, $code: String) {
        recepie(id: $id, code: $code) {
            ...RecepieFragment
            }
        }
    ${fragment.Recepie}
`

export const RECEPIE_CREATE = gql`
    mutation RecepieCreate($input: UpdateRecepie!) {
        recepieCreate(input: $input) {
            ...RecepieFragment
            }
        }
    ${fragment.Recepie}
`

export const RECEPIE_UPDATE = gql`
    mutation UpdateRecepieUpdate($id: ID!, $input: UpdateRecepie!) {
        recepieUpdate(id: $id, input: $input) {
            ...RecepieFragment
            }
        }
    ${fragment.Recepie}
`

export const RECEPIE_FINALIZE = gql`
    mutation RecepieFinalize($id: ID!) {
        recepieFinalize(id: $id) {
            ...RecepieFragment
            }
        }
    ${fragment.Recepie}
`

export const RECEPIE_ARCHIVE = gql`
    mutation RecepieArchive($id: ID!) {
        recepieArchive(id: $id) {
            ...RecepieFragment
            }
        }
    ${fragment.Recepie}
`

export const RECEPIE_UNARCHIVE = gql`
    mutation RecepieUnarchive($id: ID!) {
        recepieUnarchive(id: $id) {
            ...RecepieFragment
            }
        }
    ${fragment.Recepie}
`
