export type PurchaseOrderDetailsFormValues = {
    warehouseID: any
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
    skuID: any
	units: number
	unitCost: number
	unitOfMeasure: string

    skuName?: string
}

export type PurchaseOrderFormValues = {
    buyerID: any
    sellerID: any

    details: PurchaseOrderDetailsFormValues
    items: PurchaseOrderItemFromValues[]

    buyerName: string
    sellerName: string
    warehouseName: string
}