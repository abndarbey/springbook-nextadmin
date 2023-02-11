import { 
    useMantineTheme,
    useMantineColorScheme,
    SegmentedControl,
    Group,
    Center,
    Box,
    Switch,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const ThemeToggler = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const theme = useMantineTheme()

    return (
        <Group position="center">
            {/* <SegmentedControl
                value={colorScheme}
                onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
                data={[
                    {
                        value: 'light',
                        label: (
                        <Center>
                            <IconSun size={16} stroke={1.5} />
                            <Box ml={10}>Light</Box>
                        </Center>
                        ),
                    },
                    {
                        value: 'dark',
                        label: (
                        <Center>
                            <IconMoonStars size={16} stroke={1.5} />
                            <Box ml={10}>Dark</Box>
                        </Center>
                        ),
                    },
                ]}
            /> */}
            <Switch
                checked={colorScheme === 'dark'}
                onChange={() => toggleColorScheme()}
                mt={4}
                size="lg"
                onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
                offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
            />
        </Group>
    )
}

export default ThemeToggler