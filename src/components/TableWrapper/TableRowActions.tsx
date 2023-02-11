import { FC } from 'react'
import {
    ActionIcon,
    Group,
    Menu,
} from '@mantine/core'
import {
    IconArchive,
    IconArchiveOff,
    IconDots,
    IconEdit,
    IconEye,
    IconMessage,
    IconNote,
    IconPlus,
    IconReportAnalytics,
} from '@tabler/icons'

interface TableRowActionProps {
    item: any
    viewAction?: any
    editAction?: any
    archiveAction?: any
    unarchiveAction?: any
    addAction?: any
}

const TableRowActions = (props: TableRowActionProps) => {
    return (
        <Group spacing={4} position="center" noWrap>
            {props.viewAction &&
                <ActionIcon color="green" onClick={(e: any) => { e.stopPropagation(); props.viewAction(props.item) }}>
                    <IconEye size={16} />
                </ActionIcon>
            }
            {props.editAction &&
                <ActionIcon color="blue" onClick={(e: any) => { e.stopPropagation(); props.editAction(props.item) }}>
                    <IconEdit size={16} />
                </ActionIcon>
            }
            {props.addAction &&
                <ActionIcon color="blue" onClick={(e: any) => { e.stopPropagation(); props.addAction(props.item) }}>
                    <IconPlus size={16} />
                </ActionIcon>
            }
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
                    {!props.item.isArchived
                        ? <Menu.Item
                            icon={<IconArchive size={16}
                            stroke={1.5} />}
                            color="red"
                            onClick={(e: any) => { e.stopPropagation(); props.archiveAction(props.item) }}
                        >
                            Archive
                        </Menu.Item>
                        : <Menu.Item
                            icon={<IconArchiveOff size={16}
                            stroke={1.5} />}
                            color="orange"
                            onClick={(e: any) => { e.stopPropagation(); props.unarchiveAction(props.item) }}
                        >
                            Unarchive
                        </Menu.Item>
                    }
                </Menu.Dropdown>
            </Menu>
        </Group>
    )
}

export default TableRowActions