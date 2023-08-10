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
    mutation ContainerUpdate($uid: UUID!, $input: UpdateContainer!) {
        containerUpdate(uid: $uid, input: $input) {
            ...ContainerFragment
        }
    }
    ${fragment.Container}
`

export const CONTAINER_ARCHIVE = gql`
    mutation ContainerArchive($uid: UUID!) {
        containerArchive(uid: $uid) {
            ...ContainerFragment
        }
    }
    ${fragment.Container}
`

export const CONTAINER_UNARCHIVE = gql`
    mutation ContainerUnarchive($uid: UUID!) {
        containerUnarchive(uid: $uid) {
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