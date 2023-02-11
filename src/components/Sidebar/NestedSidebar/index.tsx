import { Navbar, Group, ScrollArea, ActionIcon } from '@mantine/core'
import { LinksGroup } from './NavbarLinks'
import { IconChevronsLeft, IconLogout, IconSwitchHorizontal } from '@tabler/icons'

import Logo from 'components/Logo'
import { sidebarStyles } from './styles'
import { menuData } from '../menuData'

interface ISidebarProps {
    width: number
    toggleSidbar: any
}

export default function NestedSidebar(props: ISidebarProps) {
    const { classes } = sidebarStyles();
    const links = menuData.map((item) => <LinksGroup {...item} key={item.label} />)


    return (
        <Navbar width={{ sm: props.width }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Logo />
                    <ActionIcon onClick={props.toggleSidbar} size={27}>
                        <IconChevronsLeft />
                    </ActionIcon>
                </Group>
            </Navbar.Section>

            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            {/* <Navbar.Section className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </Navbar.Section> */}
        </Navbar>
    )
}