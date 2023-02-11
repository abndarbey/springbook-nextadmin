import { FC } from 'react'
import { Box, Button, Group, Menu, Select, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconAlignJustified, IconEdit, IconEye, IconSearch, IconTrash } from '@tabler/icons'

interface TableActionBarProps {
    selectedRecords: any
}

const TableActionBar: FC<TableActionBarProps> = (props) => {
    return (
        <Box>
            <Group position='apart'>
                <Group>
                    <Menu withArrow>
                        <Menu.Target>
                            <Button disabled={!props.selectedRecords.length} uppercase leftIcon={<IconAlignJustified size={16} />}>
                                Actions
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item
                                icon={<IconEye size={14} />}
                                disabled={!props.selectedRecords.length}
                                onClick={() => showNotification({
                                    disallowClose: false,
                                    color: 'green',
                                    message: 'View Data',
                                })}
                            >
                                View
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconEdit size={14} />}
                                disabled={!props.selectedRecords.length}
                                onClick={() => showNotification({
                                    disallowClose: false,
                                    color: 'blue',
                                    message: 'Edit data',
                                })}
                            >
                                Edit
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconTrash size={14} />}
                                disabled={!props.selectedRecords.length}
                                onClick={() => showNotification({
                                    disallowClose: false,
                                    color: 'red',
                                    message: 'Deleting data is dangerous!',
                                })}
                            >
                                Archive
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
                <Group>
                    <TextInput
                        placeholder="Search ..."
                        icon={<IconSearch size={16} />}
                        // value={query}
                        // onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                    <Select
                        placeholder="All"
                        defaultValue='all'
                        data={[
                            { value: 'all', label: 'All' },
                            { value: 'final', label: 'Final' },
                            { value: 'archived', label: 'Archived' },
                        ]}
                    />
                </Group>
            </Group>
        </Box>
    )
}

export default TableActionBar