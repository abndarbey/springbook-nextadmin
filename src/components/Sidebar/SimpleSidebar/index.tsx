import { useState } from 'react'
import { useRouter } from 'next/router'
import { Navbar, Group, ActionIcon } from '@mantine/core'
import {
    IconSwitchHorizontal,
    IconLogout,
    IconChevronsLeft,
    IconBellRinging,
    IconReceipt2,
    IconFingerprint,
    IconKey,
    IconDatabaseImport,
    Icon2fa,
    IconSettings,
} from '@tabler/icons'

import { useStyles } from './styles'
import Logo from 'components/Logo'
import { NestedMenuType } from 'types/menuTypes'

const menuData: NestedMenuType[] = [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
]
interface ISidebarProps {
    width: number
    toggleSidbar: any
}

export default function SimpleSidebar (props: ISidebarProps) {
    const router = useRouter()
    const { classes, cx } = useStyles()
    const [active, setActive] = useState(menuData[0].label)

    const handleClick = (e: any, item: NestedMenuType) => {
        e.preventDefault()
        router.push(item.link)
        setActive(item.label)
    }

    const links = menuData.map((item) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            href={item.link}
            key={item.label}
            onClick={(e) => handleClick(e, item)}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ))

    return (
        <Navbar width={{ sm: props.width }} p="md" className={classes.navbar}>
            <Navbar.Section grow>
                <Group className={classes.header} position="apart">
                    <Logo />
                    <ActionIcon onClick={props.toggleSidbar} size={27}>
                        <IconChevronsLeft />
                    </ActionIcon>
                </Group>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    )
}
