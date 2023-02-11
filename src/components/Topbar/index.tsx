import {
    Header,
    Group,
    Box,
    TextInput,
} from '@mantine/core'
import ThemeToggler from 'components/ThemeToggler'
import NotificationsButton from './NotificationsButton'
import SelectMenu from './SystemMenu'
import UserButton from './UserButton'
import { topbarStyles } from './styles'
import { IconSearch } from '@tabler/icons'

interface ITopbarProps {
    height: number
}

export default function Topbar(props: ITopbarProps) {
    const { classes } = topbarStyles()

    return (
        <Box>
            <Header height={props.height} px="md" className={classes.navbar}>
                <Group position="apart" sx={{ height: '100%' }}>
                    <Group>
                        <SelectMenu />
                        <TextInput
                            placeholder="Search ..."
                            icon={<IconSearch size={16} />}
                            // value={query}
                            // onChange={(e) => setQuery(e.currentTarget.value)}
                        />
                    </Group>
        
                    <Group className={classes.hiddenMobile}>
                        <ThemeToggler />
                        <NotificationsButton />
                        <UserButton />
                    </Group>
                </Group>
            </Header>
        </Box>
    )
}
