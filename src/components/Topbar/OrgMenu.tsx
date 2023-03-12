import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import { Organization } from '@lib/generated/hooks'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { setOrgToLocalStorage } from 'common/localStorage'

export default function OrgMenu() {
    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    useEffect(() => {
        const orgStr = localStorage.getItem("org")
        if (!orgStr) {
            setName("SELECT ORG")
        } else {
            let orgObj = JSON.parse(orgStr)
            let selectedName: string = orgObj.name + " - " + orgObj.code
            setName(selectedName)
        }
    }, [name])
    
    const handleOrgSelect = (item: Organization) => {
        if (item) {
            let orgObj = setOrgToLocalStorage(item)
            let selectedName: string = orgObj.name + " - " + orgObj.code
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