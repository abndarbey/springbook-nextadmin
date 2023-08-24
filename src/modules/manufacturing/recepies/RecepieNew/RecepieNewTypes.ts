export type RecepieItemFromValues = {
    skuID: number
	units: number
	unitOfMeasure: string

    skuName?: string
}

export type RecepieFormValues = {
    orgID: any
    skuID: number
    units: number
	unitOfMeasure: string
    items: RecepieItemFromValues[]

    orgName: string
    skuName: string
    warehouseName: string
}