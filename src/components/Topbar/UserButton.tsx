import { useState } from "react"
import { useApolloClient } from "@apollo/client"
import { useRouter } from "next/router"
import { Auther } from "gql/generated/hooks"
import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core"
import {
    IconChevronDown,
    IconHeart,
    IconLogout,
    IconMessage,
    IconSettings,
    IconStar,
    IconSwitchHorizontal,
} from "@tabler/icons"
import { userButtonStyles } from "./styles"
import { clearLocalStorage } from "common/localStorage"

type IUserProps = {
    name: string
    image: string
}

interface IUserButtonProps {
    auther: Auther
}

export default function UserButton (props: IUserButtonProps) {
    const router = useRouter()
    const { classes, theme, cx } = userButtonStyles()
    const [userMenuOpened, setUserMenuOpened] = useState(false)
    const [autherName, setAutherName] = useState("Anonymous")
    const [isAuther, setIsAuther] = useState(false)
    const client = useApolloClient()

    // set auther name
    if (!isAuther) {
        setAutherName(props.auther.name!)
        setIsAuther(true)
    }

    const user: IUserProps = {
        name: autherName,
        image: "https://www.eyedocs.co.uk/components/com_community/assets/user-anon.png",
    }

    const handleLogout = () => {
        clearLocalStorage()
        client.cache.reset()
        router.push("/login")
    }

    return (
        <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withArrow
        >
            <Menu.Target>
                <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                >
                    <Group spacing={7}>
                        <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                        <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                            {user.name}
                        </Text>
                        <IconChevronDown size={12} stroke={1.5} />
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item icon={<IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />}>
                    Liked posts
                </Menu.Item>
                <Menu.Item icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                    Saved posts
                </Menu.Item>
                <Menu.Item icon={<IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />}>
                    Your comments
                </Menu.Item>

                <Menu.Label>Settings</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
                <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                    Change account
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label></Menu.Label>
                <Menu.Item
                    icon={<IconLogout size={14} stroke={1.5} />}
                    onClick={handleLogout}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
