import { LocalStorageObject } from "types/types"

export function setObjectToLocalStorage(key: string, item: any): LocalStorageObject {
    let obj: LocalStorageObject = {
        id: item.id!,
        code: item.code!,
        name: item.name!,
        warehouseID: item.warehouseID,
    }
    localStorage.setItem(key, JSON.stringify(obj))
    return obj
}

export function getObjectFromLocalStorage(key: string): LocalStorageObject {
    let savedItem = localStorage.getItem(key)
    let obj: LocalStorageObject = {id: "", code: "", name: "", warehouseID: ""}
    if (savedItem) {
        obj = JSON.parse(savedItem)
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
