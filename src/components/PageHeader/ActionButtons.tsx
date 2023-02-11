import { Fragment } from 'react'
import { Button } from '@mantine/core'
import { IconArchive, IconArchiveOff, IconCheck, IconChecks, IconEdit, IconPlus } from '@tabler/icons'

export interface IActionButtonProps {
    type: string
    name: string
    action: any
    disabled?: boolean
}

export function ActionButton (props: IActionButtonProps) {
    if (props.type === 'new') {
        return (
            <Button
                uppercase
                leftIcon={<IconPlus size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    if (props.type === 'edit') {
        return (
            <Button
                uppercase
                leftIcon={<IconEdit size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    if (props.type === 'finalize') {
        return (
            <Button
                uppercase
                color='green'
                disabled={props.disabled}
                leftIcon={<IconCheck size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    if (props.type === 'accept') {
        return (
            <Button
                uppercase
                color='green'
                disabled={props.disabled}
                leftIcon={<IconChecks size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    if (props.type === 'decline') {
        return (
            <Button
                uppercase
                color='red'
                disabled={props.disabled}
                leftIcon={<IconChecks size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    if (props.type === 'archive') {
        return (
            <Button
                uppercase
                color='orange'
                disabled={props.disabled}
                leftIcon={<IconArchive size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    if (props.type === 'unarchive') {
        return (
            <Button
                uppercase
                color='green'
                disabled={props.disabled}
                leftIcon={<IconArchiveOff size={16} />}
                onClick={props.action}
            >
                {props.name}
            </Button>
        )
    }

    return (
        <Fragment></Fragment>
    )
}