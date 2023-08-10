import { gql } from '@apollo/client'
import { fragment } from "gql/schema/fragments"

export const CARTONS = gql`
    query Cartons($searchFilter: SearchFilter!, $skuUID: UUID, $batchUID: UUID) {
        cartons(search: $searchFilter, skuUID: $skuUID, batchUID: $batchUID) {
            cartons {
                ...CartonFragment
            }
            total
        }
    }
    ${fragment.Carton}
`

export const CARTON = gql`
    query Carton($id: ID, $uid: UUID, $code: String) {
        carton(id: $id, uid: $uid, code: $code) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_UPDATE = gql`
    mutation CartonUpdate($uid: UUID!, $input: UpdateCarton!) {
        cartonUpdate(uid: $uid, input: $input) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_ARCHIVE = gql`
    mutation CartonArchive($uid: UUID!) {
        cartonArchive(uid: $uid) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_UNARCHIVE = gql`
    mutation CartonUnarchive($uid: UUID!) {
        cartonUnarchive(uid: $uid) {
        ...CartonFragment
        }
    }
    ${fragment.Carton}
`

//////////////////////////
// Carton Transfer Log ///
//////////////////////////

export const CARTON_TRANSFER_LOGS = gql`
    query CartonTransferLogs($searchFilter: SearchFilter!, $cartonUID: UUID!) {
        cartonTransferLogs(search: $searchFilter, cartonUID: $cartonUID) {
            cartonTransferLogs {
                ...CartonTransferLogFragment
            }
            total
        }
    }
    ${fragment.CartonTransferLog}
`

export const CARTON_TRACKER_LOGS = gql`
    query CartonTrackerLogs($searchFilter: SearchFilter!, $cartonUID: UUID!) {
        cartonTrackerLogs(search: $searchFilter, cartonUID: $cartonUID) {
            cartonTrackerLogs {
                ...CartonTrackerLogFragment
            }
            total
        }
    }
    ${fragment.CartonTrackerLog}
`