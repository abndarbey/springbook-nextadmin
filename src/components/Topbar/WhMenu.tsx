import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import { Warehouse } from '@lib/generated/hooks'
import WarehouseSelectModal from 'common/select-table/WarehouseSelectModal'
import { setObjectToLocalStorage } from 'common/localStorage'

const defaultWarehouseButtonName: string = "Select Warehouse"

export default function WhMenu() {
    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [whModalOpened, setWhModalOpened] = useState(false)

    useEffect(() => {
        const objStr = localStorage.getItem("warehouse")
        if (!objStr) {
            setName(defaultWarehouseButtonName)
        } else {
            let obj = JSON.parse(objStr)
            let selectedName: string = obj.name + " - " + obj.code
            setName(selectedName)
        }
    }, [name])
    
    const handleWhSelect = (item: Warehouse) => {
        if (item) {
            let obj = setObjectToLocalStorage("warehouse", item)
            let selectedName: string = obj.name + " - " + obj.code
            setName(selectedName)
            router.reload()
        }
    }

    const handleClear = () => {
        localStorage.removeItem("warehouse")
        setName(defaultWarehouseButtonName)
        router.reload()
    }

    return (
            <Fragment>
                {whModalOpened &&
                    <WarehouseSelectModal
                        opened={whModalOpened}
                        setOpened={setWhModalOpened}
                        handleSelect={handleWhSelect}
                        handleClear={handleClear}
                    />
                }
                <Button
                    uppercase
                    rightIcon={<IconChevronDown size={14} />}
                    onClick={() => setWhModalOpened(true)}
                >
                    {name}
                </Button>
            </Fragment>
    )
}