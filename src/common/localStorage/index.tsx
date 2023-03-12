import { Organization } from "@lib/generated/hooks"
import { OrgObject } from "types/types"

export function setOrgToLocalStorage(item: Organization): OrgObject {
    let orgObj: OrgObject = {
        uid: item.uid!,
        code: item.code!,
        name: item.name!,
    }
    localStorage.setItem("org", JSON.stringify(orgObj))
    return orgObj
}


export function getOrgFromLocalStorage(): OrgObject {
    let org = localStorage.getItem("org")
    let orgObj: OrgObject = {uid: "", code: "", name: ""}
    if (org) {
        orgObj = JSON.parse(org)
    }
    return orgObj
}

export function clearLocalStorage() {
    localStorage.removeItem("jwt")
    localStorage.removeItem("token")
    localStorage.removeItem("org")
    return
}
