import { gql } from '@apollo/client'
import { Organization, Department, Role, User, Contact } from './company'
import { SkuCatalogue, BatchCatalogue } from './catalogue'
import {
    Sku, Batch,
    QROrder, QROrderObject,
    Carton, CartonTransferLog, CartonTrackerLog,
    Container, ContainerTransferLog, ContainerTrackerLog,
    Pallet, PalletTransferLog, PalletTrackerLog,
} from './inventory'
import { Transaction } from './transaction'
import {
    WarehouseType, RackType,
    Warehouse, Rack, Cell,
    WarehouseContract,
} from './warehouse'

const Auther = gql`
    fragment AutherFragment on Auther {
        id
        isAdmin
        orgUID
        roleID
        sessionToken
    }
`

export const fragment = {
    Auther,
    
    Organization,
    Department,
    Role,
    User,
    Contact,

    SkuCatalogue,
    BatchCatalogue,

    WarehouseType,
    RackType,
    Warehouse,
    Rack,
    Cell,
    WarehouseContract,

    Sku,
    Batch,
    QROrder,
    QROrderObject,
    Carton,
    CartonTransferLog,
    CartonTrackerLog,
    Container,
    ContainerTransferLog,
    ContainerTrackerLog,
    Pallet,
    PalletTransferLog,
    PalletTrackerLog,

    Transaction,
}