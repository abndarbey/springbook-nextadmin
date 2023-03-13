import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Box, Button, Group, SimpleGrid, Text } from "@mantine/core"
import { Organization } from "@lib/generated/hooks"
import { setObjectToLocalStorage } from "common/localStorage"
import OrgSelectModal from "common/select-table/OrgSelectModal"

const defaultOwnerButtonName: string = "Select Owner"
const defaultCustodianButtonName: string = "Select Custodian"
const defaultLocationButtonName: string = "Select Location"

function selectedName(key: string, obj: any): string {
    return key + " - " + obj.name + " - " + obj.code
}

export default function InventoryFilterBar() {
    const router = useRouter()
    
    const [owner, setOwner] = useState<string>("")
    const [custodian, setCustodian] = useState<string>("")
    const [location, setLocation] = useState<string>("")

    const [ownerModalOpened, setOwnerModalOpened] = useState(false)
    const [custodianModalOpened, setCustodianModalOpened] = useState(false)
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

        // get location
        const locationStr = localStorage.getItem("location")
        if (!locationStr) {
            setLocation(defaultLocationButtonName)
        } else {
            let obj = JSON.parse(locationStr)
            let buttonName: string = obj.name + " - " + obj.code
            setLocation(buttonName)
        }
    }, [owner, custodian, location])
    
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
    const handleLocationClear = () => {
        localStorage.removeItem("location")
        setLocation(defaultLocationButtonName)
        router.reload()
    }

    return (
        <Box pb={15}>
            <SimpleGrid cols={3}>
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