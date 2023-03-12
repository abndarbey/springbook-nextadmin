import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Box, Button, Group, SimpleGrid, Text } from "@mantine/core"
import { Organization, Warehouse } from "@lib/generated/hooks"
import { setObjectToLocalStorage } from "common/localStorage"
import OrgSelectModal from "common/select-table/OrgSelectModal"
import WarehouseSelectModal from "common/select-table/WarehouseSelectModal"

const defaultOwnerButtonName: string = "Select Owner"
const defaultCustodianButtonName: string = "Select Custodian"
const defaultWarehouseButtonName: string = "Select Warehouse"
const defaultLocationButtonName: string = "Select Location"

function selectedName(key: string, obj: any): string {
    return key + " - " + obj.name + " - " + obj.code
}

export default function InventoryFilterBar() {
    const router = useRouter()
    
    const [owner, setOwner] = useState<string>("")
    const [custodian, setCustodian] = useState<string>("")
    const [warehouse, setWarehouse] = useState<string>("")
    const [location, setLocation] = useState<string>("")

    const [ownerModalOpened, setOwnerModalOpened] = useState(false)
    const [custodianModalOpened, setCustodianModalOpened] = useState(false)
    const [warehouseModalOpened, setWarehouseModalOpened] = useState(false)
    const [locationModalOpened, setLocationModalOpened] = useState(false)

    useEffect(() => {
        // get owner
        const ownerStr = localStorage.getItem("owner")
        if (!ownerStr) {
            setOwner(defaultOwnerButtonName)
        } else {
            let obj = JSON.parse(ownerStr)
            let buttonName = selectedName("Owner", obj)
            setOwner(buttonName)
        }

        // get custodian
        const custodianStr = localStorage.getItem("custodian")
        if (!custodianStr) {
            setCustodian(defaultCustodianButtonName)
        } else {
            let obj = JSON.parse(custodianStr)
            let buttonName = selectedName("Custodian", obj)
            setCustodian(buttonName)
        }

        // get warehouse
        const warehouseStr = localStorage.getItem("warehouse")
        if (!warehouseStr) {
            setWarehouse(defaultWarehouseButtonName)
        } else {
            let obj = JSON.parse(warehouseStr)
            let buttonName = selectedName("Warehouse", obj)
            setWarehouse(buttonName)
        }

        // get location
        const locationStr = localStorage.getItem("location")
        if (!locationStr) {
            setLocation(defaultLocationButtonName)
        } else {
            let obj = JSON.parse(locationStr)
            let buttonName: string = obj.name + " - " + obj.code
            setLocation(buttonName)
        }
    }, [owner, custodian, warehouse, location])
    
    const handleOwnerSelect = (item: Organization) => {
        if (item) {
            let obj = setObjectToLocalStorage("owner", item)
            let buttonName = selectedName("Owner", obj)
            setOwner(buttonName)
            router.reload()
        }
    }
    const handleCustodianSelect = (item: Organization) => {
        if (item) {
            let obj = setObjectToLocalStorage("custodian", item)
            let buttonName = selectedName("Custodian", obj)
            setCustodian(buttonName)
            router.reload()
        }
    }
    const handleWarehouseSelect = (item: Warehouse) => {
        if (item) {
            let obj = setObjectToLocalStorage("warehouse", item)
            let buttonName = selectedName("Owner", obj)
            setWarehouse(buttonName)
            router.reload()
        }
    }
    const handleLocationSelect = () => {
        console.log("location select")
    }

    const handleOwnerClear = () => {
        localStorage.removeItem("owner")
        setOwner(defaultOwnerButtonName)
        router.reload()
    }
    const handleCustodianClear = () => {
        localStorage.removeItem("custodian")
        setCustodian(defaultCustodianButtonName)
        router.reload()
    }
    const handleWarehouseClear = () => {
        localStorage.removeItem("warehouse")
        setWarehouse(defaultWarehouseButtonName)
        router.reload()
    }
    const handleLocationClear = () => {
        localStorage.removeItem("location")
        setLocation(defaultLocationButtonName)
        router.reload()
    }

    return (
        <Box pb={15}>
            <SimpleGrid cols={4}>
                {ownerModalOpened &&
                    <OrgSelectModal
                        opened={ownerModalOpened}
                        setOpened={setOwnerModalOpened}
                        handleSelect={handleOwnerSelect}
                        handleClear={handleOwnerClear}
                    />
                }
                <Button
                    variant="outline"
                    onClick={() => setOwnerModalOpened(true)}
                >
                    {owner}
                </Button>

                {custodianModalOpened &&
                    <OrgSelectModal
                        opened={custodianModalOpened}
                        setOpened={setCustodianModalOpened}
                        handleSelect={handleCustodianSelect}
                        handleClear={handleCustodianClear}
                    />
                }
                <Button
                    variant="outline"
                    onClick={() => setCustodianModalOpened(true)}
                >
                    {custodian}
                </Button>

                {warehouseModalOpened &&
                    <WarehouseSelectModal
                        opened={warehouseModalOpened}
                        setOpened={setWarehouseModalOpened}
                        handleSelect={handleWarehouseSelect}
                        handleClear={handleWarehouseClear}
                    />
                }
                <Button
                    variant="outline"
                    onClick={() => setWarehouseModalOpened(true)}
                >
                    {warehouse}
                </Button>

                {locationModalOpened &&
                    <OrgSelectModal
                        opened={locationModalOpened}
                        setOpened={setLocationModalOpened}
                        handleSelect={handleLocationSelect}
                        handleClear={handleLocationClear}
                    />
                }
                <Button
                    variant="outline"
                    onClick={() => setLocationModalOpened(true)}
                >
                    {location}
                </Button>
            </SimpleGrid>
        </Box>
    )
}