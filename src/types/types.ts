import { ViewOption } from "gql/generated/hooks"

export type SelectFieldData = {
    value: string | null | undefined
    label: string | null | undefined
}

export type PageProps = {
    title?: string
    code?: any
    view?: ViewOption
}

export type LocalStorageObject = {
    id: string
    code: string
    name: string
    warehouseID?: string
}