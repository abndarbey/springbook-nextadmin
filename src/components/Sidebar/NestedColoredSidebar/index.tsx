import { Navbar, Group, Code, ScrollArea } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import { sidebarStyles } from './styles'
import { menuData } from '../menuData'
import { SidebarLinksGroup } from './SidebarLinksGroup'
import { IconSwitchHorizontal, IconLogout } from '@tabler/icons'

const NestedColoredSidebar = () => {
    const { classes } = sidebarStyles()

    const links = menuData.map((item) => <SidebarLinksGroup {...item} key={item.label} />)

    return (
        <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="center">
                    <MantineLogo size={27} inverted />
                </Group>
            </Navbar.Section>
    
            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
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

export default NestedColoredSidebar