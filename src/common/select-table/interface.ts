
import { Dispatch, SetStateAction } from "react"

export interface ISelectModalProps {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    handleSelect?: any
    organizationUID?: string
    departmentID?: string
    roelID?: string
    ownerUID?: string
    custodianUID?: string
}