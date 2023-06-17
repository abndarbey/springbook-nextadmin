import { Box, Text } from '@mantine/core'
import React from 'react'

type DetailColumnProps = {
    title: string
    value: any
}
export default function DetailColumn(props: DetailColumnProps) {
    return (
        <Box mb={10}>
            <Text size="sm" weight={700}>{props.title}</Text>
            <Text>{props.value}</Text>
        </Box>
    )
}