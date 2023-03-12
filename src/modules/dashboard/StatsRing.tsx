import { RingProgress, Text, SimpleGrid, Paper, Center, Group } from '@mantine/core'
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons'
import { statusGridStyles } from './styles';

interface IStatsRingProp {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: 'up' | 'down';
}

const icons = {
    up: IconArrowUpRight,
    down: IconArrowDownRight,
}

const data: IStatsRingProp[] = [
    {
        label: "Page views",
        stats: "456,578",
        progress: 65,
        color: "teal",
        icon: "up"
    },
    {
        label: "New users",
        stats: "2,550",
        progress: 72,
        color: "blue",
        icon: "up"
    },
    {
        label: "Orders",
        stats: "4,735",
        progress: 52,
        color: "red",
        icon: "down"
    },
    {
        label: "Orders",
        stats: "4,735",
        progress: 52,
        color: "red",
        icon: "down"
    }
] 

export default function StatsRing() {
    const { classes } = statusGridStyles()
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon]
        return (
            <Paper withBorder radius="md" mt="md" p="xs" key={stat.label}>
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: stat.progress, color: stat.color }]}
                        label={
                        <Center>
                            <Icon size={22} stroke={1.5} />
                        </Center>
                        }
                    />

                    <div>
                        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                        {stat.label}
                        </Text>
                        <Text weight={700} size="xl">
                        {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        )
    })
    return (
        <div className={classes.root}>
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {stats}
            </SimpleGrid>
        </div>
    )
}