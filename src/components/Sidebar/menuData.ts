import {
    IconGauge,
    IconNotes,
    IconFileAnalytics,
    IconAdjustments,
    IconBuildingBank,
    IconBook,
    IconBuildingWarehouse,
    IconFileBarcode,
    IconBox,
    IconTruckDelivery,
    IconTruckLoading,
    IconTruck,
    IconWorld,
    IconBuilding,
    IconCurrency,
    IconCurrencyRupee,
} from '@tabler/icons'

export const menuData = [
    {
        label: 'Dashboard',
        link: '/',
        icon: IconGauge,
    },
    {
        label: 'Nexport',
        link: '',
        icon: IconWorld,
        initiallyOpened: false,
        links: [
            { label: 'Organizations', link: '/nexport/organizations' },
            { label: 'SKUs', link: '/nexport/skus' },
            { label: 'Batches', link: '/nexport/batches' },
        ],
    },
    {
        label: 'Accounts',
        link: '',
        icon: IconCurrencyRupee,
        initiallyOpened: false,
        links: [
            { label: 'Banking', link: '/accounts/banking' },
        ],
    },
    {
        label: 'Company',
        link: '',
        icon: IconBuilding,
        initiallyOpened: false,
        links: [
            { label: 'Organizations', link: '/company/organizations' },
            { label: 'Departments', link: '/company/departments' },
            { label: 'Roles', link: '/company/roles' },
            { label: 'Users', link: '/company/users' },
            { label: 'Contacts', link: '/company/contacts' },
        ],
    },
    {
        label: 'Contracts',
        link: '',
        icon: IconNotes,
        initiallyOpened: false,
        links: [
            { label: 'Warehouse Contracts - Contractor', link: '/contracts/contractor/warehouse-contracts' },
            { label: 'Warehouse Contracts - Client', link: '/contracts/client/warehouse-contracts' },
        ],
    },
    {
        label: 'Catalogues',
        link: '',
        icon: IconBook,
        initiallyOpened: false,
        links: [
            { label: 'SKUs', link: '/catalogues/skus' },
            { label: 'Batches', link: '/catalogues/batches' },
        ],
    },
    {
        label: 'Inventory',
        link: '',
        icon: IconBox,
        initiallyOpened: false,
        links: [
            { label: 'QR Orders', link: '/inventory/qr-orders' },
            { label: 'SKUs', link: '/inventory/skus' },
            { label: 'Batches', link: '/inventory/batches' },
            { label: 'Cartons', link: '/inventory/cartons' },
            { label: 'Pallets', link: '/inventory/pallets' },
            { label: 'Containers', link: '/inventory/containers' },
        ],
    },
    {
        label: 'Procurements',
        link: '',
        icon: IconFileBarcode,
        initiallyOpened: false,
        links: [
            { label: 'Purchase Orders', link: '/procurements/purchase-orders' },
            { label: 'Market Orders', link: '/procurements/market-orders' },
            { label: 'Sales Orders', link: '/procurements/sales-orders' },
            { label: 'Invoices', link: '/procurements/invoices' },
            { label: 'RFQs', link: '/procurements/rfqs' },
            { label: 'Quotations', link: '/procurements/quotations' },
        ],
    },
    {
        label: 'Sales',
        link: '',
        icon: IconFileAnalytics,
        initiallyOpened: false,
        links: [
            { label: 'Purchase Orders', link: '/sales/purchase-orders' },
            { label: 'Market Orders', link: '/sales/market-orders' },
            { label: 'Sales Orders', link: '/sales/sales-orders' },
            { label: 'Stock Transfer Orders', link: '/sales/stock-transfer-orders' },
            { label: 'Invoices', link: '/sales/invoices' },
            { label: 'RFQs', link: '/sales/rfqs' },
            { label: 'Quotations', link: '/sales/quotations' },
        ],
    },
    {
        label: 'Inbound Shipment',
        link: '',
        icon: IconTruckDelivery,
        initiallyOpened: false,
        links: [
            { label: 'Advance Shipment Notices', link: '/shipments-inbound/asns' },
            { label: 'Shipments', link: '/shipments-inbound/shipments' },
            { label: 'Goods Receipt Notes', link: '/shipments-inbound/grns' },
            { label: 'Putaways', link: '/shipments-inbound/putaways' },
        ],
    },
    {
        label: 'Outbound Shipment',
        link: '',
        icon: IconTruckLoading,
        initiallyOpened: false,
        links: [
            { label: 'Stock Transfer Orders', link: '/shipments-outbound/stock-transfer-orders' },
            { label: 'Picklists', link: '/shipments-outbound/picklists' },
            { label: 'Dispatch Orders', link: '/shipments-outbound/dispatch-orders' },
            { label: 'Shipments', link: '/shipments-outbound/shipments' },
            { label: 'Goods Receipt Notes', link: '/shipments-outbound/grns' },
        ],
    },
    {
        label: 'Warehouse',
        link: '',
        icon: IconBuildingWarehouse,
        initiallyOpened: false,
        links: [
            { label: 'Warehouse Types', link: '/warehouses/warehouse-types' },
            { label: 'Rack Types', link: '/warehouses/rack-types' },
            { label: 'Pallet Types', link: '/warehouses/pallet-types' },
            { label: 'Warehouses', link: '/warehouses/warehouses' },
            { label: 'Racks', link: '/warehouses/racks' },
            { label: 'Cells', link: '/warehouses/cells' },
            { label: 'Bins', link: '/warehouses/bins' },
            { label: 'Shelves', link: '/warehouses/shelves' },
            { label: 'Pallets', link: '/warehouses/pallets' },
        ],
    },
    {
        label: 'Transportation',
        link: '',
        icon: IconTruck,
        initiallyOpened: false,
        links: [
            { label: 'Contracts', link: '/transportation/contracts' },
            { label: 'Warehouse Types', link: '/transportation/warehouse-types' },
            { label: 'Rack Types', link: '/transportation/rack-types' },
            { label: 'Pallet Types', link: '/transportation/pallet-types' },
        ],
    },
    {
        label: 'Manufacturing',
        link: '',
        icon: IconBuildingWarehouse,
        initiallyOpened: false,
        links: [
            { label: 'Recepies', link: '/manufacturing/recepies' },
            { label: 'Production Orders', link: '/manufacturing/production-orders' },
        ],
    },
    {
        label: 'Settings',
        link: '/dashboard',
        icon: IconAdjustments,
    },
];