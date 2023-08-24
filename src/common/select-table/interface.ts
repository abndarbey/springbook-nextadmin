
import { Dispatch, SetStateAction } from "react"

export interface ISelectModalProps {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    handleSelect?: any
    handleClear?: any
    organizationID?: string
    departmentID?: string
    roelID?: string
    ownerID?: string
    custodianID?: string
    skuID?: string
    skuID?: string
    isThirdParty?: boolean
}