import { gql } from '@apollo/client'
import { fragment } from "@lib/graphql/fragments"

export const ORGANIZATIONS = gql`
    query Organizations($searchFilter: SearchFilter!) {
        organizations(search: $searchFilter) {
            organizations {
                    ...OrganizationFragment
                }
                total
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION = gql`
    query Organization($uid: UUID, $code: String) {
        organization(uid: $uid, code: $code) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION_UPDATE = gql`
    mutation OrganizationUpdate($uid: UUID!, $input: UpdateOrganization!) {
        organizationUpdate(uid: $uid, input: $input) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION_ARCHIVE = gql`
    mutation OrganizationArchive($uid: UUID!) {
        organizationArchive(uid: $uid) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION_UNARCHIVE = gql`
    mutation OrganizationUnarchive($uid: UUID!) {
        organizationUnarchive(uid: $uid) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`