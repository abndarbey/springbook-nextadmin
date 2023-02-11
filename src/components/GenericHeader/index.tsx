import { Group, Header } from '@mantine/core'
import Logo from 'components/Logo'
import ThemeToggler from 'components/ThemeToggler'

export default function GenericHeader() {
    return (
        <Header height={60} p={10}>
            <Group position='apart'>
                <Logo />
                <ThemeToggler />
            </Group>
        </Header>
    )
}