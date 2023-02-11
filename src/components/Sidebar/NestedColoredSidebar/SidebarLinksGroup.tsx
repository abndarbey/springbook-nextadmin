import { Fragment, useState } from 'react'
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton } from '@mantine/core'
import { TablerIcon, IconChevronLeft, IconChevronRight } from '@tabler/icons'
import { linkGroupStyles } from './styles'
import Link from 'next/link'

interface LinksGroupProps {
    icon: TablerIcon;
    label: string;
    link: string;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[]
}

export const SidebarLinksGroup = ({ icon: Icon, label, link, initiallyOpened, links }: LinksGroupProps) => {
    const { classes, theme } = linkGroupStyles();
    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(initiallyOpened || false);
    const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
    
    const items = (hasLinks ? links : []).map((link) => (
        <Link
            // component="a"
            className={classes.link}
            href={link.link}
            as={link.link}
            key={link.label}
            // onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </Link>
    ))

    return (
            <Fragment>
                <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
                    <Group position="apart" spacing={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ThemeIcon variant="light" size={30}>
                                <Icon size={18} />
                            </ThemeIcon>
                            <Box ml="md">
                                {label}
                            </Box>
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
            </Fragment>
    )
}

export default SidebarLinksGroup