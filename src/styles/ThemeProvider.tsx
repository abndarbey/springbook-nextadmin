import { ReactNode } from 'react'
import { ButtonStylesParams, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import GlobalTheme from './GlobalTheme'
import { colors } from './colors'

interface ThemeProviderProps {
    children: ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    })
    
    const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    
    useHotkeys([['mod+J', () => toggleColorScheme()]])
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme,
                    colors,
                    primaryColor: 'green',
                    components: {
                        Button: {
                            // Subscribe to theme and component params
                            styles: (theme, params: ButtonStylesParams) => ({
                                root: {
                                backgroundColor:
                                    params.variant === 'filled'
                                    ? theme.colors[params.color || theme.primaryColor][8]
                                    : undefined,
                                    ":hover": {
                                        backgroundColor: theme.colorScheme === "dark" ? "#fff" : "#000",
                                        color: theme.colorScheme === "dark" ? "#000" : "#fff",
                                        transition: "0.5s all ease",
                                    }
                                },
                            }),
                        },
                    },
                }}
            >
                <GlobalTheme />
                {props.children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
