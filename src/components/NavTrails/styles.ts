import { createStyles } from "@mantine/core"

export const navTrailStyles = createStyles((theme) => ({
    anchor: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
        fontWeight: 700,
        textDecoration: 'none!important',
        cursor: 'default!important',
    }
}))