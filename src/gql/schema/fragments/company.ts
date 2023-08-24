import { gql } from '@apollo/client'

export const Organization = gql`
    fragment OrganizationFragment on Organization {
        id
        code
        name
        website
        logo {
            name
            url
        }
        sector
        status
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
            id
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
            id
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
            id
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
        companyID
        name
        website
        sector
        isFinal
        isArchived
        organization {
            id
            code
            name
        }
        createdAt
    }
`