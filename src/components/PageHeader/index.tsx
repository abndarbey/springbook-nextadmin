import { Box, Group, Text } from '@mantine/core'
import { IActionButtonProps, ActionButton } from './ActionButtons'

interface IPageHeaderProps {
    title: string
    buttons?: IActionButtonProps[]
}

export default function PageHeader (props: IPageHeaderProps) {
    const buttons = props.buttons?.map((item, key) => {
        return (
            <ActionButton
                key={key}
                type={item.type}
                name={item.name}
                disabled={item.disabled}
                action={item.action}
            />
        )
    })

    return (
        <Box py={10}>
            <Group position="apart">
                <Group position='left'>
                    <Text size={40} weight={700}>{props.title}</Text>
                </Group>
                <Group position='right'>{buttons}</Group>
            </Group>
        </Box>
    )
}