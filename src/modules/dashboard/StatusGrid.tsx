import {
    SimpleGrid,
    Paper,
    Text,
    Group,
} from '@mantine/core'
import {
    IconUserPlus,
    IconDiscount2,
    IconReceipt2,
    IconCoin,
    IconArrowUpRight,
    IconArrowDownRight,
} from '@tabler/icons'
import { statusGridStyles } from './styles'

const icons = {
    user: IconUserPlus,
    discount: IconDiscount2,
    receipt: IconReceipt2,
    coin: IconCoin,
}

interface IStatsGridProp {
    title: string
    icon: keyof typeof icons
    value: string
    diff: number
}

const data: IStatsGridProp[] = [
    {
        title: 'REVENUE',
        icon: 'receipt',
        value: '13,456',
        diff: 34,
    },
    {
        title: 'PROFIT',
        icon: 'coin',
        value: '4,145',
        diff: -13,
    },
    {
        title: 'COUPONS USAGE',
        icon: 'discount',
        value: '745',
        diff: 18,
    },
    {
        title: 'NEW CUSTOMERS',
        icon: 'user',
        value: '188',
        diff: -30,
    },
]

export default function StatusGrid() {
    const { classes } = statusGridStyles()

    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
    
        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <Group position="apart">
                    <Text size="xs" color="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size={22} stroke={1.5} />
                </Group>
        
                <Group align="flex-end" spacing="xs" mt={25}>
                    <Text className={classes.value}>{stat.value}</Text>
                    <Text
                        color={stat.diff > 0 ? 'teal' : 'red'}
                        size="sm"
                        weight={500}
                        className={classes.diff}
                    >
                        <span>{stat.diff}%</span>
                        <DiffIcon size={16} stroke={1.5} />
                    </Text>
                </Group>
        
                <Text size="xs" color="dimmed" mt={7}>
                    Compared to previous month
                </Text>
            </Paper>
        )
    })
    return (
        <div className={classes.root}>
            <SimpleGrid
                cols={4}
                breakpoints={[
                    { maxWidth: 'md', cols: 2 },
                    { maxWidth: 'xs', cols: 1 },
                ]}
            >
                {stats}
            </SimpleGrid>
        </div>
    )
}