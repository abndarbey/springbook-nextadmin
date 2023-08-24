import { gql } from '@apollo/client'

export const Sku = gql`
    fragment SkuFragment on Sku {
        id
        gid
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
        parentSkuID
        isParent
        isRawMaterial
        status
        isFinal
        isArchived
        createdAt
        batchCount
        cartonCount
        organization {
            id
            code
            name
        }
    }
`

export const Batch = gql`
    fragment BatchFragment on Batch {
        id
        gid
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
            id
            gid
            code
            name
        }
        organization {
            id
            code
            name
        }
    }
`

export const QROrder = gql`
    fragment QROrderFragment on QROrder {
        id
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
            code
            name
        }
        warehouse {
            id
            code
            name
        }
        sku {
            id
            code
            name
        }
        batch {
            id
            code
            batchNumber
        }
    }
`

export const QROrderObject = gql`
    fragment QROrderObjectFragment on QROrderObject {
        id
        qrOrderID
        objectID
    }
`

export const Carton = gql`
    fragment CartonFragment on Carton {
        id
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
            id
            gid
            code
            name
        }
        batch {
            id
            gid
            code
            batchNumber
        }
    }
`

export const CartonTransferLog = gql`
    fragment CartonTransferLogFragment on CartonTransferLog {
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

export const CartonWeightLog = gql`
    fragment CartonWeightLogFragment on CartonWeightLog {
        id
        drawdownWeight
        measuredWeight
        createdAt
        productionOrder {
            id
            code
        }
    } 
`


export const Container = gql`
    fragment ContainerFragment on Container {
        id
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