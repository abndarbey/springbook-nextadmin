import { gql } from '@apollo/client'
import { fragment } from "gql/schema/fragments"

export const USERS = gql`
    query Users($searchFilter: SearchFilter!, $roleID: ID) {
        users(search: $searchFilter, roleID: $roleID) {
            users {
                    ...UserFragment
                }
                total
            }
        }
    ${fragment.User}
`

export const USER = gql`
    query User($id: ID, $handle: String) {
        user(id: $id, handle: $handle) {
            ...UserFragment
            }
        }
    ${fragment.User}
`

export const USER_CREATE = gql`
    mutation UserCreate($input: UpdateUser!) {
        userCreate(input: $input) {
            ...UserFragment
            }
        }
    ${fragment.User}
`

export const USER_UPDATE = gql`
    mutation UserUpdate($id: ID!, $input: UpdateUser!) {
        userUpdate(id: $id, input: $input) {
            ...UserFragment
            }
        }
    ${fragment.User}
`

export const USER_ARCHIVE = gql`
    mutation UserArchive($id: ID!) {
        userArchive(id: $id) {
            ...UserFragment
            }
        }
    ${fragment.User}
`

export const USER_UNARCHIVE = gql`
    mutation UserUnarchive($id: ID!) {
        userUnarchive(id: $id) {
            ...UserFragment
            }
        }
    ${fragment.User}
`