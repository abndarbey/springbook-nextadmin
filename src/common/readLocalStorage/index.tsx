import { OrgObject } from "types/types"

export function getOrgFromLocalStorage(): OrgObject {
    // get org from local storage
    let org = localStorage.getItem("org")
    let orgObj: OrgObject = {uid: "", code: "", name: ""}
    if (org) {
        orgObj = JSON.parse(org)
    }
    return orgObj
}
