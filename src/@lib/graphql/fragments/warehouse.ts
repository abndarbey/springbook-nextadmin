import { gql } from '@apollo/client'

export const WarehouseType = gql`
    fragment WarehouseTypeFragment on WarehouseType {
        id
        code
        name
        details
        status
        isFinal
        isArchived
        createdAt
        organization {
            uid
            code
            name
        }
    }
`

export const RackType = gql`
    fragment RackTypeFragment on RackType {
        id
        code
        name
        storageType
        storageDimension {
            length
            breadth
            height
            unit
        }
        status
        isFinal
        isArchived
        createdAt
        organization {
            uid
            code
            name
        }
    }
`

export const PalletType = gql`
    fragment PalletTypeFragment on PalletType {
        id
        code
        name
        length
        breadth
        weightCapacity
        weightUnit
        status
        isFinal
        isArchived
        createdAt
        organization {
            uid
            code
            name
        }
    }
`

export const Warehouse = gql`
    fragment WarehouseFragment on Warehouse {
        id
        uid
        code
        name
        details
        dimension {
            centralHeight
            wallHeight
            carpetLength
            carpetBreadth
            carpetArea
            buildUpLength
            buildUpBreadth
            buildUpArea
        }
        specifications {
            shedType
            floorType
        }
        address {
            locality
            city
            pincode
        }
        status
        isFinal
        isArchived
        createdAt
        type {
            id
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

export const Rack = gql`
    fragment RackFragment on Rack {
        id
        code
        rows
        columns
        dimension {
            length
            breadth
            height
            unit
        }
        status
        isFinal
        isArchived
        createdAt
        type {
            id
            code
            name
        }
        warehouse {
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

export const Cell = gql`
    fragment CellFragment on Cell {
        id
        code
        row
        col
        status
        isAllocated
        isOccupied
        isFinal
        isArchived
        createdAt
        rack {
            id
            code
        }
        warehouse {
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

export const Pallet = gql`
    fragment PalletFragment on Pallet {
        id
        uid
        code
        status
        isAllocated
        isOccupied
        isFinal
        isArchived
        createdAt
        type {
            id
            code
            name
        }
        warehouse {
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

export const WarehouseContract = gql`
    fragment WarehouseContractFragment on WarehouseContract {
        id
        uid
        code
        message
        status
        acceptanceStatus
        isFinal
        isArchived
        isAccepted
        createdAt
        contractor {
            uid
            code
            name
        }
        client {
            uid
            code
            name
        }
        warehouse {
            uid
            code
            name
        }
    }
`

export const ThirdPartyWarehouse = gql`
    fragment ThirdPartyWarehouseFragment on ThirdPartyWarehouse {
        id
        code
        name
        details
        dimension {
            centralHeight
            wallHeight
            carpetLength
            carpetBreadth
            carpetArea
            buildUpLength
            buildUpBreadth
            buildUpArea
        }
        specifications {
            shedType
            floorType
        }
        address {
            locality
            city
            pincode
        }
        status
        isFinal
        isArchived
        createdAt
        warehouse {
            uid
            code
            name
        }
        contract {
            uid
            code
        }
        organization {
            uid
            code
            name
        }
    }
`