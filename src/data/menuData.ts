import { SystemMenuType, NestedMenuType } from 'types/menuTypes'
import {
    IconGauge,
    IconNotes,
    IconCalendarStats,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
    IconBellRinging,
    IconReceipt2,
    IconFingerprint,
    IconKey,
    IconDatabaseImport,
    Icon2fa,
    IconSettings,
    IconDashboard,
    IconHome2,
    IconUser,
} from '@tabler/icons'

export const systemMenus: SystemMenuType[] = [
    {label: 'ERP'},
    {label: 'ORG'},
    {label: 'WMS'},
    {label: 'IMS'},
    {label: 'OMS'},
    {label: 'TMS'},
    {label: 'SMS'},
]

export const data: NestedMenuType[] = [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
]

export const companyMenus: NestedMenuType[] = [
    {
        link: '/',
        label: 'Dashboard',
        icon: IconDashboard,
    },
    {
        link: '/company/organizations',
        label: 'Organizations',
        icon: IconHome2,
    },
    {
        link: '/company/departments',
        label: 'Departments',
        icon: IconGauge,
    },
    {
        link: '/company/roles',
        label: 'Roles',
        icon: IconGauge,
    },
    {
        link: '/company/staffs',
        label: 'Staffs',
        icon: IconUser,
    },
]

export const warehousingMenus: NestedMenuType[] = [
    {
        link: '/wms/dashboard',
        label: 'Dashboard',
        icon: IconDashboard,
    },
    {
        link: '/wms/warehouses',
        label: 'Warehouses',
        icon: IconHome2,
    },
    {
        link: '/wms/racks',
        label: 'Racks',
        icon: IconGauge,
    },
    {
        link: '/wms/cells',
        label: 'Cells',
        icon: IconGauge,
    },
    {
        link: '/wms/pallets',
        label: 'Pallets',
        icon: IconUser,
    },
]