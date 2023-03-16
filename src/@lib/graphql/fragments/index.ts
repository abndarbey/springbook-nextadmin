import { gql } from '@apollo/client'
import { Organization, Department, Role, User, Contact } from './company'
import { SkuCatalogue, BatchCatalogue } from './catalogue'
import { Sku, Batch, Carton } from './inventory'
import {
    WarehouseType, RackType, PalletType,
    Warehouse, Rack, Cell, Pallet,
    WarehouseContract,
} from './warehouse'

const Auther = gql`
    fragment AutherFragment on Auther {
        id
        isAdmin
        orgUID
        roleID
    }
`

const AuthPayload = gql`
    fragment AuthPayloadFragment on AuthPayload {
        tokenString
    }
`

export const fragment = {
    Auther,
    AuthPayload,
    
    Organization,
    Department,
    Role,
    User,
    Contact,

    SkuCatalogue,
    BatchCatalogue,

    WarehouseType,
    RackType,
    PalletType,
    Warehouse,
    Rack,
    Cell,
    Pallet,
    WarehouseContract,

    Sku,
    Batch,
    Carton
}