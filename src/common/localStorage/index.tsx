import { LocalStorageObject } from "types/types"

export function setObjectToLocalStorage(key: string, item: any): LocalStorageObject {
    let obj: LocalStorageObject = {
        uid: item.uid!,
        code: item.code!,
        name: item.name!,
    }
    localStorage.setItem(key, JSON.stringify(obj))
    return obj
}

export function getObjectFromLocalStorage(key: string): LocalStorageObject {
    let org = localStorage.getItem(key)
    let obj: LocalStorageObject = {uid: "", code: "", name: ""}
    if (org) {
        obj = JSON.parse(org)
    }
    return obj
}

export function clearLocalStorage() {
    localStorage.removeItem("jwt")
    localStorage.removeItem("token")
    localStorage.removeItem("org")
    localStorage.removeItem("owner")
    localStorage.removeItem("custodian")
    localStorage.removeItem("warehouse")
    localStorage.removeItem("location")
    return
}
