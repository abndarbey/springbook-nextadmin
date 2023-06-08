import { Global } from '@mantine/core'

export default function GlobalTheme() {
    return (
        <Global
            styles={(theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },
                
                "html, body": {
                    ...theme.fn.fontStyles(),
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    lineHeight: theme.lineHeight,
                    padding: 0,
                    margin: 0,
                },

                a: {
                    color: "inherit",
                    textDecoration: "none",
                },
            })}
        />
    )
}
