import { Paper } from '@mantine/core'
import { ReactNode } from 'react'

interface IContentCard {
    mb?: string | number
    children: ReactNode
}

export default function ContentCard(props: IContentCard) {
    return (
        <Paper p='xl' mb={props.mb} withBorder>
            {props.children}
        </Paper>
    )
}