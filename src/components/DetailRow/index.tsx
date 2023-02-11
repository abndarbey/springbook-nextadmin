import { Box, Text } from '@mantine/core'
import React from 'react'

interface IDetailRow {
    title: string
    value: any
}
export default function DetailRow(props: IDetailRow) {
    return (
        <Box mb={10}>
            <Text size="sm" weight={700}>{props.title}</Text>
            <Text>{props.value}</Text>
        </Box>
    )
}