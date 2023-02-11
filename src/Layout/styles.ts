import { createStyles } from '@mantine/core'

export const layoutStyles = createStyles((theme) => {
    return {
        container: {
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: 'auto 1fr',
            gridTemplateAreas: `
                'sidebar topbar'
                'sidebar content'
            `
        },
        sidebar: {
            gridArea: 'sidebar',
            backgroundColor: '#dark',
            height: '100%',
        },
        topbar: {
            gridArea: 'topbar',
            backgroundColor: 'yellow',
        },
        content: {
            gridArea: 'content',
            height: '100%',
            width: '100%',
            overflowY: 'scroll',
            padding: 20,
            marginBottom: 0,
        },
    }
})