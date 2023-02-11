import { useRouter } from 'next/router'
import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core'
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons'

import Page from 'components/Page'
import ContentCard from 'components/ContentCard'
import PageHeader from 'components/PageHeader'
import { INavTrailProps } from 'components/NavTrails'
import { IActionButtonProps } from 'components/PageHeader/ActionButtons'
import {
    useWarehouseQuery,
    useWarehouseFinalizeMutation,
    useWarehouseArchiveMutation,
    useWarehouseUnarchiveMutation,
    Warehouse,
} from '@lib/generated/hooks'
import PageLoader from 'components/PageLoader'
import { showNotification } from '@mantine/notifications'

type ContactIconVariant = 'white' | 'gradient'

interface ContactIconStyles {
    variant: ContactIconVariant
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
        variant === 'gradient'
            ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
                theme.colors[theme.primaryColor][6]
            } 100%)`
            : 'none',
        backgroundColor: 'transparent',
    },

    title: {
        color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === 'gradient' ? theme.black : theme.white,
    },
}))

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: React.FC<any>
    title: React.ReactNode
    description: React.ReactNode
    variant?: ContactIconVariant
}

function ContactIcon({
    icon: Icon,
    title,
    description,
    variant = 'gradient',
    className,
    ...others
}: ContactIconProps) {
    const { classes, cx } = useStyles({ variant })
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            {variant === 'gradient' ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                <Icon size={24} />
                </ThemeIcon>
            ) : (
                <Box mr="md">
                <Icon size={24} />
                </Box>
            )}

            <div>
                <Text size="xs" className={classes.title}>
                {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    )
}

interface ContactIconsListProps {
    data?: ContactIconProps[]
    variant?: ContactIconVariant
}

const MOCKDATA = [
    { title: 'Email', description: 'hello@slackbear.com', icon: IconAt },
    { title: 'Phone', description: '+91 7757 888 393', icon: IconPhone },
    { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
]

function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
    const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />)
    return <Stack>{items}</Stack>
}

interface IWarehouseDetailsProps {
    code?: any
}

export default function WarehouseDetails(props: IWarehouseDetailsProps) {
    const router = useRouter()
    const title: string = `Warehouse: ${props.code}`

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Warehouses', href: '/warehouses/warehouses' },
        { title: props.code, href: '#' },
    ]

    // fetch data
    const { data, loading, error } = useWarehouseQuery(
        {
            variables: {
                code: props.code,
            }
        }
    )
    if (loading) {
        return (
            <PageLoader />
        )
    }
    if (!loading && error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    console.log(data)

    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/warehouses/warehouses/${props.code}/edit`)
    }
    
    const handleFinalize = (e: any) => {
        e.preventDefault()
        console.log('Finalize Page Button')
    }
    
    const handleArchive = (e: any) => {
        e.preventDefault()
        console.log('Archive Page Button')
    }
    
    const handleUnarchive = (e: any) => {
        e.preventDefault()
        console.log('Unarchive Page Button')
    }

    const actionButtons: IActionButtonProps[] = [
        { type: 'edit', name: 'Edit', action: handleEdit },
        { type: 'finalize', name: 'Finalize', action: handleFinalize },
        { type: 'archive', name: 'Archive', action: handleArchive, disabled: true },
        { type: 'unarchive', name: 'Unarchive', action: handleUnarchive, disabled: true },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={title} buttons={actionButtons} />
            <ContentCard>
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                    <Box
                        sx={(theme) => ({
                        padding: theme.spacing.xl,
                        borderRadius: theme.radius.md,
                        backgroundColor: theme.white,
                        })}
                    >
                        <ContactIconsList />
                    </Box>

                    <Box
                        sx={(theme) => ({
                        padding: theme.spacing.xl,
                        borderRadius: theme.radius.md,
                        backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
                            theme.colors[theme.primaryColor][4]
                        } 100%)`,
                        })}
                    >
                        <ContactIconsList variant="white" />
                    </Box>
                </SimpleGrid>
            </ContentCard>
        </Page>
    )
}