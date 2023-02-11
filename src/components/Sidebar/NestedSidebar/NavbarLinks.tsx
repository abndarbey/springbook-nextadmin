import { useState } from 'react'
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles } from '@mantine/core'
import { TablerIcon, IconCalendarStats, IconChevronLeft, IconChevronRight } from '@tabler/icons'

import { navLinkStyles } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LinksGroupProps {
    icon: TablerIcon
    label: string
    link: string
    initiallyOpened?: boolean
    links?: {label: string; link: string }[]
}

export function LinksGroup({ icon: Icon, label, link, initiallyOpened, links }: LinksGroupProps) {
    const router = useRouter()
    const { classes, theme } = navLinkStyles()
    const hasLinks = Array.isArray(links)
    const [opened, setOpened] = useState(initiallyOpened || false)
    const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft

    const handleClick = (e: any, href: string) => {
        e.preventDefault()
        router.push(href, undefined, {shallow: true})
    } 
    
    const items = (hasLinks ? links : []).map((link) => (
        <Text<'a'>
            component="a"
            className={classes.link}
            href={link.link}
            key={link.label}
            onClick={(event) => handleClick(event, link.link)}
        >
            {link.label}
        </Text>
    )
)

    return (
        <>
            <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
                <Group position="apart" spacing={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" size={30}>
                            <Icon size={18} />
                        </ThemeIcon>
                        {!hasLinks && <Box ml="md" onClick={(e: any) => handleClick(e, link)}>{label}</Box>}
                        {hasLinks && <Box ml="md">{label}</Box>}
                    </Box>
                    {hasLinks && (
                        <ChevronIcon
                            className={classes.chevron}
                            size={14}
                            stroke={1.5}
                            style={{
                                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    )
}
