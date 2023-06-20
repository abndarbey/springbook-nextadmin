export type PurchaseOrderDetailsFormValues = {
    warehouseUID: any
    shippingAddress: string
	city: string
	country: string
	pincode: string

    currency: string
    shippingMethod: string
    incoterm: string
    notes: string
    buyerMessage: string
}

export type PurchaseOrderItemFromValues = {
    skuUID: any
	units: number
	unitCost: number
	unitOfMeasure: string

    skuName?: string
}

export type PurchaseOrderFormValues = {
    buyerUID: any
    sellerUID: any

    details: PurchaseOrderDetailsFormValues
    items: PurchaseOrderItemFromValues[]

    buyerName: string
    sellerName: string
    warehouseName: string
}