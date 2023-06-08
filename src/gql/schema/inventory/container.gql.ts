import { gql } from '@apollo/client'
import { fragment } from "gql/schema/fragments"

export const CONTAINERS = gql`
    query Containers($searchFilter: SearchFilter!) {
        containers(search: $searchFilter) {
            containers {
                ...ContainerFragment
            }
            total
        }
    }
    ${fragment.Container}
`

export const CONTAINER = gql`
    query Container($id: ID, $uid: UUID, $code: String) {
        container(id: $id, uid: $uid, code: $code) {
            ...ContainerFragment
        }
    }
    ${fragment.Container}
`

export const CONTAINER_UPDATE = gql`
    mutation ContainerUpdate($id: ID!, $input: UpdateContainer!) {
        containerUpdate(id: $id, input: $input) {
            ...ContainerFragment
        }
    }
    ${fragment.Container}
`

export const CONTAINER_ARCHIVE = gql`
    mutation ContainerArchive($id: ID!) {
        containerArchive(id: $id) {
            ...ContainerFragment
        }
    }
    ${fragment.Container}
`

export const CONTAINER_UNARCHIVE = gql`
    mutation ContainerUnarchive($id: ID!) {
        containerUnarchive(id: $id) {
        ...ContainerFragment
        }
    }
    ${fragment.Container}
`

//////////////////////////
// Container Transfer Log ///
//////////////////////////

export const CONTAINER_TRANSFER_LOGS = gql`
    query ContainerTransferLogs($searchFilter: SearchFilter!, $containerUID: UUID!) {
        containerTransferLogs(search: $searchFilter, containerUID: $containerUID) {
            containerTransferLogs {
                ...ContainerTransferLogFragment
            }
            total
        }
    }
    ${fragment.ContainerTransferLog}
`

export const CONTAINER_TRACKER_LOGS = gql`
    query ContainerTrackerLogs($searchFilter: SearchFilter!, $containerUID: UUID!) {
        containerTrackerLogs(search: $searchFilter, containerUID: $containerUID) {
            containerTrackerLogs {
                ...ContainerTrackerLogFragment
            }
            total
        }
    }
    ${fragment.ContainerTrackerLog}
`