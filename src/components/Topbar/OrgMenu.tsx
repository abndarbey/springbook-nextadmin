import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import { Organization } from '@lib/generated/hooks'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { setObjectToLocalStorage } from 'common/localStorage'

export default function OrgMenu() {
    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    useEffect(() => {
        const objStr = localStorage.getItem("org")
        if (!objStr) {
            setName("SELECT ORG")
        } else {
            let obj = JSON.parse(objStr)
            let selectedName: string = obj.name + " - " + obj.code
            setName(selectedName)
        }
    }, [name])
    
    const handleOrgSelect = (item: Organization) => {
        if (item) {
            let obj = setObjectToLocalStorage("org", item)
            let selectedName: string = obj.name + " - " + obj.code
            setName(selectedName)
            router.reload()
        }
    }

    const handleClear = () => {
        localStorage.removeItem("org")
        setName("SELECT ORG")
        router.reload()
    }

    return (
            <Fragment>
                {orgModalOpened &&
                    <OrgSelectModal
                        opened={orgModalOpened}
                        setOpened={setOrgModalOpened}
                        handleSelect={handleOrgSelect}
                        handleClear={handleClear}
                    />
                }
                <Button
                    rightIcon={<IconChevronDown size={14} />}
                    onClick={() => setOrgModalOpened(true)}
                >
                    {name}
                </Button>
            </Fragment>
    )
}