import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const ORGANIZATIONS = gql`
    query Organizations($searchFilter: SearchFilter!, $sector: String) {
        organizations(search: $searchFilter, sector: $sector) {
            organizations {
                    ...OrganizationFragment
                }
                total
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION = gql`
    query Organization($id: ID, $code: String) {
        organization(id: $id, code: $code) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION_UPDATE = gql`
    mutation OrganizationUpdate($id: ID!, $input: UpdateOrganization!) {
        organizationUpdate(id: $id, input: $input) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION_ARCHIVE = gql`
    mutation OrganizationArchive($id: ID!) {
        organizationArchive(id: $id) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`

export const ORGANIZATION_UNARCHIVE = gql`
    mutation OrganizationUnarchive($id: ID!) {
        organizationUnarchive(id: $id) {
            ...OrganizationFragment
            }
        }
    ${fragment.Organization}
`