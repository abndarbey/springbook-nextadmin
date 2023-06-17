import { Pallet } from "gql/generated/hooks"
import { Badge, Box, Group, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import QrGen from "components/QrGen"

interface IPalletDetailsHTMLProps {
    data: Pallet
}

export default function PalletDetailsHTML(props: IPalletDetailsHTMLProps) {
    return (
        <SimpleGrid cols={2}>
            <SimpleGrid cols={1}>
                <ContentCard>
                    <SimpleGrid cols={4} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Code" value={props.data.code!} />
                            {/* <DetailColumn title="Name" value={props.data.name!} /> */}
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Status" value={<Badge>{props.data?.status!}</Badge>} />
                        </Box>
                    </SimpleGrid>
                </ContentCard>
                <ContentCard>
                    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Latitude" value={props.data.latestTrackerLog?.geoLocation?.lat!} />
                            <DetailColumn title="Longitude" value={props.data.latestTrackerLog?.geoLocation?.lon!} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Owner Code" value={props.data?.latestTransferLog?.owner?.code!} />
                            <DetailColumn title="Owner Name" value={props.data?.latestTransferLog?.owner?.name!} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Custodian Code" value={props.data?.latestTransferLog?.custodian?.code!} />
                            <DetailColumn title="Custodian Name" value={props.data?.latestTransferLog?.custodian?.name!} />
                        </Box>
                    </SimpleGrid>
                </ContentCard>
            </SimpleGrid>
            <ContentCard>
                <Group position="center">
                    <QrGen uid={props.data?.uid} />
                </Group>
                <Group position="center">
                    <Text mt="xs">{props.data?.uid}</Text>
                </Group>
            </ContentCard>
        </SimpleGrid>
    )
}
