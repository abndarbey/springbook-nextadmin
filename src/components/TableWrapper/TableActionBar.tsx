import { useState } from 'react'
import { Box, Button, Group, Menu, Select, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconAlignJustified, IconEdit, IconEye, IconSearch, IconTrash } from '@tabler/icons'

interface ITableActionBarProps {
    showActionButton: boolean
    selectedRecords: any
    batchViewAction?: any
    filterAction?: any
    filterOptions: string[]
}

const TableActionBar = (props: ITableActionBarProps) => {
    return (
        <Box>
            <Group position={props.showActionButton ? 'apart' : 'right'}>
                {props.showActionButton && <Group>
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
                                onClick={(e: any) => { e.stopPropagation(); props.batchViewAction(props.selectedRecords) }}
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
                </Group>}
                <Group>
                    <TextInput
                        placeholder="Search ..."
                        icon={<IconSearch size={16} />}
                        // value={query}
                        // onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                    <Select
                        placeholder={props.filterOptions[0]}
                        defaultValue={props.filterOptions[0]}
                        data={props.filterOptions}
                        onChange={props.filterAction}
                    />
                </Group>
            </Group>
        </Box>
    )
}

export default TableActionBar