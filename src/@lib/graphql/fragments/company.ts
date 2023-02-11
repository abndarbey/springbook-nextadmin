import { gql } from '@apollo/client'

export const Organization = gql`
    fragment OrganizationFragment on Organization {
        id
        uid
        code
        name
        website
        logo {
            name
            url
        }
        sector
        isArchived
        createdAt
    }
`

export const Department = gql`
    fragment DepartmentFragment on Department {
        id
        code
        name
        isFinal
        isArchived
        createdAt
        updatedAt
        organization {
            uid
            code
            name
        }
    }
`

export const Role = gql`
    fragment RoleFragment on Role {
        id
        code
        name
        isManagement
        isFinal
        isArchived
        createdAt
        permissions
        organization {
            uid
            code
            name
        }
        department {
            id
            code
            name
        }
    }
`

export const User = gql`
    fragment UserFragment on User {
        id
        firstName
        lastName
        email
        phone
        isFinal
        isArchived
        role {
            id
            code
            name
            isManagement
        }
        organization {
            uid
            code
            name
        }
        createdAt
    }
`

export const Contact = gql`
    fragment ContactFragment on Contact {
        id
        code
        companyUID
        name
        website
        sector
        isFinal
        isArchived
        organization {
            uid
            code
            name
        }
        createdAt
    }
`