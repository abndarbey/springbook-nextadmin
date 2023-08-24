import { gql } from '@apollo/client'
import { fragment } from "@/gql/schema/fragments"

export const CARTONS = gql`
    query Cartons($searchFilter: SearchFilter!, $skuID: ID, $batchID: ID) {
        cartons(search: $searchFilter, skuID: $skuID, batchID: $batchID) {
            cartons {
                ...CartonFragment
            }
            total
        }
    }
    ${fragment.Carton}
`

export const CARTON = gql`
    query Carton($id: ID, $code: String) {
        carton(id: $id, code: $code) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_UPDATE = gql`
    mutation CartonUpdate($id: ID!, $input: UpdateCarton!) {
        cartonUpdate(id: $id, input: $input) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_ARCHIVE = gql`
    mutation CartonArchive($id: ID!) {
        cartonArchive(id: $id) {
            ...CartonFragment
        }
    }
    ${fragment.Carton}
`

export const CARTON_UNARCHIVE = gql`
    mutation CartonUnarchive($id: ID!) {
        cartonUnarchive(id: $id) {
        ...CartonFragment
        }
    }
    ${fragment.Carton}
`

//////////////////////////
// Carton Transfer Log ///
//////////////////////////

export const CARTON_TRANSFER_LOGS = gql`
    query CartonTransferLogs($searchFilter: SearchFilter!, $cartonID: ID!) {
        cartonTransferLogs(search: $searchFilter, cartonID: $cartonID) {
            cartonTransferLogs {
                ...CartonTransferLogFragment
            }
            total
        }
    }
    ${fragment.CartonTransferLog}
`

//////////////////////////
/// Carton Tracker Log ///
//////////////////////////

export const CARTON_TRACKER_LOGS = gql`
    query CartonTrackerLogs($searchFilter: SearchFilter!, $cartonID: ID!) {
        cartonTrackerLogs(search: $searchFilter, cartonID: $cartonID) {
            cartonTrackerLogs {
                ...CartonTrackerLogFragment
            }
            total
        }
    }
    ${fragment.CartonTrackerLog}
`

//////////////////////////
/// Carton Weight Log ///
//////////////////////////

export const CARTON_WEIGHT_LOGS = gql`
    query CartonWeightLogs($searchFilter: SearchFilter!, $cartonID: ID!) {
        cartonWeightLogs(search: $searchFilter, cartonID: $cartonID) {
            cartonWeightLogs {
                ...CartonWeightLogFragment
            }
            total
        }
    }
    ${fragment.CartonWeightLog}
`

export const CARTON_WEIGHT_LOG_CREATE = gql`
    mutation CartonWeightLogCreate($input: UpdateCartonWeightLog!) {
        cartonWeightLogCreate(input: $input) {
            ...CartonWeightLogFragment
        }
    }
    ${fragment.CartonWeightLog}
`
