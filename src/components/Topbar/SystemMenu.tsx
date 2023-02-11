import { useState } from 'react'
import { Menu, Button } from '@mantine/core'
import { IconSettings, IconChevronDown } from '@tabler/icons'
import { systemMenus } from 'data/menuData'
import { SystemMenuType } from 'types/menuTypes'

interface ISystemMenu {}

// const systemMenus: string[] = [
//     'ERP',
//     'ORG',
//     'WMS',
//     'IMS',
//     'OMS',
//     'TMS',
//     'SMS',
// ]

export default function SystemMenu(props: ISystemMenu) {
    const [menu, setMenu] = useState(systemMenus[0])
    const handleSelect = (item: SystemMenuType) => {
        setMenu(item)
    }

    const dropdownList = systemMenus.map((menu, i) => {
        return (
            <Menu.Item key={i}
                icon={<IconSettings size={14} />}
                onClick={ () => handleSelect(menu) }
            >
                {menu.label}
            </Menu.Item>
        )
    })

    return (
            <Menu shadow="md" width={120} withArrow>
                <Menu.Target>
                    <Button rightIcon={<IconChevronDown size={14} />}>{menu.label}</Button>
                </Menu.Target>

                <Menu.Dropdown>
                    {/* <Menu.Label>Select ERPs</Menu.Label> */}
                    {dropdownList}
                </Menu.Dropdown>
            </Menu>
    )
}