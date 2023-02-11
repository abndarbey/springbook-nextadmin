import { useState } from 'react'
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, ActionIcon, Group } from '@mantine/core'
import {
    TablerIcon,
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
    IconChevronsRight,
} from '@tabler/icons'
import { miniSidebarStyles } from './styles'

interface NavbarLinkProps {
    icon: TablerIcon
    label: string
    active?: boolean
    onClick?(): void
}

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
    const { classes, cx } = miniSidebarStyles()
    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    )
}

const mockdata = [
    { icon: IconHome2, label: 'Home' },
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    { icon: IconCalendarStats, label: 'Releases' },
    { icon: IconUser, label: 'Account' },
    { icon: IconFingerprint, label: 'Security' },
    { icon: IconSettings, label: 'Settings' },
]

interface IMiniSidebarProps {
    toggleSidbar: any
}

export default function MiniSidebar(props: IMiniSidebarProps) {
    const { classes } = miniSidebarStyles()
    const [active, setActive] = useState(2)

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ))

    return (
        <Navbar height={750} width={{ base: 80 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="center">
                    <ActionIcon onClick={props.toggleSidbar} size={27}>
                        <IconChevronsRight />
                    </ActionIcon>
                </Group>
            </Navbar.Section>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                    <NavbarLink icon={IconLogout} label="Logout" />
                </Stack>
            </Navbar.Section>
        </Navbar>
    )
}
