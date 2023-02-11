import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { AdminLayout, AuthLayout, ErrorLayout } from 'Layout'

import { ApolloProvider } from '@apollo/client'
import { client } from '@lib/apollo/client'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getAuthLayout?: (page: ReactElement) => ReactNode
    getErrorLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
    const { Component, pageProps } = props

    
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    })
    
    const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    
    useHotkeys([['mod+J', () => toggleColorScheme()]])

    return (
        <ApolloProvider client={client}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme,
                        // colors: {
                        //     brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
                        // },
                        // primaryColor: 'brand',
                    }}
                >
                    <NotificationsProvider position="bottom-right" zIndex={999999}>
                        <ModalsProvider>
                            {
                                Component.getErrorLayout ? <ErrorLayout><Component {...pageProps} /></ErrorLayout> :
                                Component.getAuthLayout ? <AuthLayout><Component {...pageProps} /></AuthLayout> :
                                <AdminLayout>
                                    <Component {...pageProps} />
                                </AdminLayout>
                            }
                        </ModalsProvider>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </ApolloProvider>
    )
}