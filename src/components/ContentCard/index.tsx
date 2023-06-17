import { Paper } from '@mantine/core'
import { ReactNode } from 'react'
import { useContentCardStyles } from './styles'

type ContentCardProps = {
    mb?: string | number
    children: ReactNode
}

export default function ContentCard(props: ContentCardProps) {
    const { classes } = useContentCardStyles()
    return (
        <Paper
            // className={classes.container}
            p='xl' mb={props.mb}
            withBorder
            // shadow="sm"
        >
            {props.children}
        </Paper>
    )
}