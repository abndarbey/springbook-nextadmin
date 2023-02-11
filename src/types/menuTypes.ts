import { TablerIcon } from "@tabler/icons"

export type SystemMenuType = {
    label: string
}

export type NestedMenuType = {
    link: string
    label: string
    icon: TablerIcon
    children?: NestedMenuType[]
}