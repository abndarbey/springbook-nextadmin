import { useState } from "react"
import { Header, Group, Box, TextInput } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { IconSearch } from "@tabler/icons"
import ThemeToggler from "components/ThemeToggler"
import { useAutherQuery } from "@lib/generated/hooks"
import NotificationsButton from "./NotificationsButton"
import PageLoader from "components/PageLoader"
import SystemMenu from "./SystemMenu"
import UserButton from "./UserButton"
import { topbarStyles } from "./styles"
import OrgMenu from "./OrgMenu"
import { useRouter } from "next/router"

interface ITopbarProps {
    height: number
}

export default function Topbar(props: ITopbarProps) {
    console.log("Topbar")
    const { classes } = topbarStyles()
    const [_, setAutherName] = useState("Anonymous")
    const [isAuther, setIsAuther] = useState(false)

    // fetch auther data
    const authData = useAutherQuery()
    if (authData.loading) {
        return (
            <PageLoader />
        )
    }
    if (authData.error) {
        showNotification({
            disallowClose: false,
            color: "red",
            message: authData.error.message,
        })
        localStorage.removeItem("token")
        return (
            <PageLoader isError={true} />
        )
    }

    // set auther name
    if (authData && !isAuther) {
        setAutherName(authData.data?.auther.name!)
        setIsAuther(true)
    }

    return (
        <Box>
            <Header height={props.height} px="md" className={classes.navbar}>
                <Group position="apart" sx={{ height: "100%" }}>
                    <Group>
                        <SystemMenu />
                        {authData.data?.auther.isAdmin && <OrgMenu />}
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
                        {isAuther && <UserButton auther={authData.data?.auther!} />}
                    </Group>
                </Group>
            </Header>
        </Box>
    )
}
