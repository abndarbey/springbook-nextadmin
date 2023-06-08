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
    uid: string
    code: string
    name: string
    warehouseUID?: string
}