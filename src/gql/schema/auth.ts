import { gql } from '@apollo/client'
import { fragment } from "./fragments"

export const AUTHER = gql`
    query Auther {
        auther {
            id
            name
            isAdmin
            orgID
        }
    }
`

export const GENERATE_OTP = gql`
    mutation GenerateOTP($input: OTPRequest!) {
        generateOTP(input: $input)
    }
`

export const LOGIN = gql`
    mutation Login($input: LoginRequest!) {
        login(input: $input) {
            ...AutherFragment
        }
    }
    ${fragment.Auther}
`

export const ORGANIZATION_REGISTER = gql`
    mutation OrganizationRegister($input: RegisterOrganization!) {
        organizationRegister(input: $input) {
            ...OrganizationFragment
        }
    }
    ${fragment.Organization}
`