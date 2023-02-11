import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const CONTACTS = gql`
    query Contacts($searchFilter: SearchFilter!, $orgUID: UUID) {
        contacts(search: $searchFilter, orgUID: $orgUID) {
            contacts {
                    ...ContactFragment
                }
                total
            }
        }
    ${fragment.Contact}
`

export const CONTACT = gql`
    query Contact($id: ID, $code: String) {
        contact(id: $id, code: $code) {
            ...ContactFragment
            }
        }
    ${fragment.Contact}
`

export const CONTACT_CREATE = gql`
    mutation ContactCreate($input: UpdateContact!) {
        contactCreate(input: $input) {
            ...ContactFragment
            }
        }
    ${fragment.Contact}
`

export const CONTACT_UPDATE = gql`
    mutation ContactUpdate($id: ID!, $input: UpdateContact!) {
        contactUpdate(id: $id, input: $input) {
            ...ContactFragment
            }
        }
    ${fragment.Contact}
`

export const CONTACT_FINALIZE = gql`
    mutation ContactFinalize($id: ID!) {
        contactFinalize(id: $id) {
            ...ContactFragment
            }
        }
    ${fragment.Contact}
`

export const CONTACT_ARCHIVE = gql`
    mutation ContactArchive($id: ID!) {
        contactArchive(id: $id) {
            ...ContactFragment
            }
        }
    ${fragment.Contact}
`

export const CONTACT_UNARCHIVE = gql`
    mutation ContactUnarchive($id: ID!) {
        contactUnarchive(id: $id) {
            ...ContactFragment
            }
        }
    ${fragment.Contact}
`