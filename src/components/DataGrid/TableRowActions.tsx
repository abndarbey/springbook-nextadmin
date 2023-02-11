import { FC } from 'react'
import { closeModal, openModal } from '@mantine/modals'
import {
    ActionIcon,
    Button,
    Grid,
    Group,
    Menu,
    Stack,
    Text,
} from '@mantine/core'
import {
    IconDots,
    IconEdit,
    IconEye,
    IconMessage,
    IconNote,
    IconReportAnalytics,
    IconTrash,
} from '@tabler/icons'

interface TableRowActionProps {
    item: any
}

const showInfo = (item: any) => {
    openModal({
        modalId: 'view',
        title: 'Showing company information',
        children: (
            <Stack>
                <Text>Heres where you could show more information...</Text>
                <Grid gutter="xs">
                    <Grid.Col span={2}>ID</Grid.Col>
                    <Grid.Col span={10}>{item.id}</Grid.Col>
                    <Grid.Col span={2}>Name</Grid.Col>
                    <Grid.Col span={10}>{item.name}</Grid.Col>
                </Grid>
                <Button onClick={() => closeModal('view')}>Close</Button>
            </Stack>
        ),
    })
}

const editInfo = (item: any) => {
    openModal({
        modalId: 'edit',
        title: 'Editing company information',
        children: (
            <Stack>
                <Text>Heres where you could put an edit form...</Text>
                <Grid gutter="xs">
                    <Grid.Col span={2}>ID</Grid.Col>
                    <Grid.Col span={10}>{item.id}</Grid.Col>
                    <Grid.Col span={2}>Name</Grid.Col>
                    <Grid.Col span={10}>{item.name}</Grid.Col>
                </Grid>
                <Button onClick={() => closeModal('edit')}>Close</Button>
            </Stack>
        ),
    })
}

const deleteCompany = (item: any) => {
    openModal({
        modalId: 'delete',
        title: 'Delete company',
        children: (
            <Stack>
                <Text>Heres where you could ask for confirmation before deleting...</Text>
                <Grid gutter="xs">
                    <Grid.Col span={2}>ID</Grid.Col>
                    <Grid.Col span={10}>{item.id}</Grid.Col>
                    <Grid.Col span={2}>Name</Grid.Col>
                    <Grid.Col span={10}>{item.name}</Grid.Col>
                </Grid>
                <Button onClick={() => closeModal('delete')}>Close</Button>
            </Stack>
        ),
    })
}

const TableRowActions: FC<TableRowActionProps> = (props) => {
    return (
        <Group spacing={4} position="center" noWrap>
            <ActionIcon color="green" onClick={(e: any) => { e.stopPropagation(); showInfo(props.item) }}>
                <IconEye size={16} />
            </ActionIcon>
            <ActionIcon color="blue" onClick={(e: any) => { e.stopPropagation(); editInfo(props.item) }}>
                <IconEdit size={16} />
            </ActionIcon>
            <Menu transition="pop" withArrow position="bottom-end">
                <Menu.Target>
                    <ActionIcon onClick={(e: any) => e.stopPropagation() }>
                        <IconDots size={16} stroke={1.5} />
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        icon={<IconMessage size={16}
                        stroke={1.5} />}
                        onClick={(e: any) => e.stopPropagation()}
                    >
                        Send message
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconNote size={16} stroke={1.5} />}
                        onClick={(e: any) => e.stopPropagation()}
                    >
                        Add note
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconReportAnalytics size={16} stroke={1.5} />}
                        onClick={(e: any) => e.stopPropagation()}
                    >
                        Analytics
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconTrash size={16}
                        stroke={1.5} />}
                        color="red"
                        onClick={(e: any) => { e.stopPropagation(); deleteCompany(props.item) }}
                    >
                        Archive
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    )
}

export default TableRowActions