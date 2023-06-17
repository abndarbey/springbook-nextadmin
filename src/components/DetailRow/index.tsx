import { Text } from '@mantine/core'
import React from 'react'

type DetailRowProps = {
    title: string
    value: string
}
export default function DetailRow(props: DetailRowProps) {
    return (
        <tr>
            <td><Text weight={700} mr="sm">{props.title}:</Text></td>
            <td>{props.value}</td>
        </tr>
    )
}
