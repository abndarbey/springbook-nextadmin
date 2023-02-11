import { FC } from 'react'
import { Anchor, Breadcrumbs } from '@mantine/core'
import { navTrailStyles } from './styles'

export interface INavTrailProps {
    title: string
    href: string
}

interface INavTrailsProps {
    navTrails: INavTrailProps[]
}

const NavTrails = (props: INavTrailsProps) => {
    const { classes } = navTrailStyles()

    const items = props.navTrails.map((item, index) => (
        item.href === '#'
        ? <Anchor key={index} className={classes.anchor}>
            {item.title}
        </Anchor>
        : <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ))
    
    return (
        <Breadcrumbs>{items}</Breadcrumbs>
    )
}

export default NavTrails