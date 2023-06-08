import { gql } from '@apollo/client'

export const Sku = gql`
    fragment SkuFragment on Sku {
        id
        uid
        code
        name
        hsnCode
        brand
        description
        ingredients
        weight
        weightUnit
        masterPhoto {
            name
            url
        }
        parentSkuUID
        isParent
        status
        isFinal
        isArchived
        createdAt
        batchCount
        cartonCount
        organization {
            uid
            code
            name
        }
    }
`

export const Batch = gql`
    fragment BatchFragment on Batch {
        id
        uid
        code
        batchNumber
        description
        productionDate
        expiryDate
        status
        isFinal
        isArchived
        cartonCount
        sku {
            uid
            code
            name
        }
        organization {
            uid
            code
            name
        }
    }
`

export const QROrder = gql`
    fragment QROrderFragment on QROrder {
        id
        uid
        code
        objectType
        description
        quantity
        status
        isFinal
        isArchived
        createdAt
        updatedAt
        organization {
            id
            uid
            code
            name
        }
        warehouse {
            id
            uid
            code
            name
        }
        sku {
            id
            uid
            code
            name
        }
        batch {
            id
            uid
            code
            batchNumber
        }
    }
`

export const QROrderObject = gql`
    fragment QROrderObjectFragment on QROrderObject {
        id
        qrOrderUID
        objectUID
    }
`

export const Carton = gql`
    fragment CartonFragment on Carton {
        id
        uid
        code
        description
        status
        isArchived
        latestTransferLog {
            id
            owner {
                id
                code
                name
            }
            custodian {
                id
                code
                name
            }
            warehouse {
                id
                code
                name
            }
        }
        latestTrackerLog {
            id
            temperature
            humidity
            geoLocation {
                lat
                lon
            }
        }
        latestTransaction {
            name
            createdAt
        }
        sku {
            uid
            code
            name
        }
        batch {
            uid
            code
            batchNumber
        }
    }
`

export const CartonTransferLog = gql`
    fragment CartonTransferLogFragment on CartonTransferLog {
        id
        owner {
            uid
            code
            name
        }
        custodian {
            uid
            code
            name
        }
        warehouse {
            uid
            code
            name
        }
        createdAt
    } 
`

export const CartonTrackerLog = gql`
    fragment CartonTrackerLogFragment on CartonTrackerLog {
        id
        temperature
        humidity
        geoLocation {
            lat
            lon
        }
        createdAt
    } 
`


export const Container = gql`
    fragment ContainerFragment on Container {
        id
        uid
        code
        description
        status
        isArchived
        latestTransferLog {
            id
            owner {
                id
                code
                name
            }
            custodian {
                id
                code
                name
            }
            warehouse {
                id
                code
                name
            }
        }
        latestTrackerLog {
            id
            temperature
            humidity
            geoLocation {
                lat
                lon
            }
        }
        latestTransaction {
            name
            createdAt
        }
    }
`

export const ContainerTransferLog = gql`
    fragment ContainerTransferLogFragment on ContainerTransferLog {
        id
        owner {
            uid
            code
            name
        }
        custodian {
            uid
            code
            name
        }
        warehouse {
            uid
            code
            name
        }
        createdAt
    } 
`

export const ContainerTrackerLog = gql`
    fragment ContainerTrackerLogFragment on ContainerTrackerLog {
        id
        temperature
        humidity
        geoLocation {
            lat
            lon
        }
        createdAt
    } 
`
export const Pallet = gql`
    fragment PalletFragment on Pallet {
        id
        uid
        code
        description
        status
        isArchived
        latestTransferLog {
            id
            owner {
                id
                code
                name
            }
            custodian {
                id
                code
                name
            }
            warehouse {
                id
                code
                name
            }
        }
        latestTrackerLog {
            id
            temperature
            humidity
            geoLocation {
                lat
                lon
            }
        }
        latestTransaction {
            name
            createdAt
        }
    }
`

export const PalletTransferLog = gql`
    fragment PalletTransferLogFragment on PalletTransferLog {
        id
        owner {
            uid
            code
            name
        }
        custodian {
            uid
            code
            name
        }
        warehouse {
            uid
            code
            name
        }
        createdAt
    } 
`

export const PalletTrackerLog = gql`
    fragment PalletTrackerLogFragment on PalletTrackerLog {
        id
        temperature
        humidity
        geoLocation {
            lat
            lon
        }
        createdAt
    } 
`