import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const CellS = gql`
    query Cells($searchFilter: SearchFilter!) {
        cells(search: $searchFilter) {
            cells {
                    ...CellFragment
                }
                total
            }
        }
    ${fragment.Cell}
`

export const Cell = gql`
    query Cell($id: ID, $code: String) {
        cell(id: $id, code: $code) {
            ...CellFragment
            }
        }
    ${fragment.Cell}
`

export const CELL_CREATE = gql`
    mutation CellCreate($input: UpdateCell!) {
        cellCreate(input: $input) {
            ...CellFragment
            }
        }
    ${fragment.Cell}
`

export const CELL_UPDATE = gql`
    mutation CellUpdate($id: ID!, $input: UpdateCell!) {
        cellUpdate(id: $id, input: $input) {
            ...CellFragment
            }
        }
    ${fragment.Cell}
`

export const CELL_FINALIZE = gql`
    mutation CellFinalize($id: ID!) {
        cellFinalize(id: $id) {
            ...CellFragment
            }
        }
    ${fragment.Cell}
`

export const CELL_ARCHIVE = gql`
    mutation CellArchive($id: ID!) {
        cellArchive(id: $id) {
            ...CellFragment
            }
        }
    ${fragment.Cell}
`

export const CELL_UNARCHIVE = gql`
    mutation CellUnarchive($id: ID!) {
        cellUnarchive(id: $id) {
            ...CellFragment
            }
        }
    ${fragment.Cell}
`