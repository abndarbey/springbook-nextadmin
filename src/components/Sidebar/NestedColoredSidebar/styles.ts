import { createStyles } from '@mantine/core'

export const sidebarStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon')
    return {
        navbar: {
            backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
            paddingBottom: 0,
            height: '100vh',
        },
        
        header: {
            padding: theme.spacing.md,
            paddingTop: 0,
            marginLeft: -theme.spacing.md,
            marginRight: -theme.spacing.md,
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            borderBottom: `1px solid ${theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            )}`,
        },

        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            )}`,
        },
        
        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.white,
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.fn.lighten(
                    theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                    0.1
                ),
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.white,
            opacity: 0.75,
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.lighten(
                    theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                    0.15
                ),
                [`& .${icon}`]: {
                    opacity: 0.9,
                },
            },
        },

        links: {
            marginLeft: -theme.spacing.md,
            marginRight: -theme.spacing.md,
        },

        linksInner: {
            paddingTop: theme.spacing.xl,
            paddingBottom: theme.spacing.xl,
        },
    }
})

export const linkGroupStyles = createStyles((theme) => ({
    // controls are styles for labels
    control: {
        display: 'block',
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            ),
        },
    },

    link: {
        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        paddingLeft: 31,
        marginLeft: 30,
        fontSize: theme.fontSizes.sm,
        color: theme.white,
        borderLeft: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            ),
        },
    },

    chevron: {
        transition: 'transform 200ms ease',
    },
}))