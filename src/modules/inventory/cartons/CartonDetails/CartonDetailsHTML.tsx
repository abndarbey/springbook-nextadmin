import { Fragment } from "react"
import { Carton } from "@lib/generated/hooks"
import { Box, Group, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"
import QrGen from "components/QrGen"

interface ICartonDetailsHTMLProps {
    data: Carton
}

export default function CartonDetailsHTML(props: ICartonDetailsHTMLProps) {
    return (
        <SimpleGrid cols={2}>
            <SimpleGrid cols={1}>
                <ContentCard>
                    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="Code" value={props.data.code!} />
                            {/* <DetailRow title="Name" value={props.data.name!} /> */}
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="SKU Code" value={props.data?.sku?.code!} />
                            <DetailRow title="SKU Name" value={props.data?.sku?.name!} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="Batch Code" value={props.data?.batch?.code!} />
                            <DetailRow title="Batch Number" value={props.data?.batch?.batchNumber!} />
                        </Box>
                    </SimpleGrid>
                </ContentCard>
                <ContentCard>
                    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="Latitude" value={props.data.latestTrackerLog?.location?.lat!} />
                            <DetailRow title="Longitude" value={props.data.latestTrackerLog?.location?.lon!} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="Owner Code" value={props.data?.owner?.code!} />
                            <DetailRow title="Owner Name" value={props.data?.owner?.name!} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="Custodian Code" value={props.data?.custodian?.code!} />
                            <DetailRow title="Custodian Name" value={props.data?.custodian?.name!} />
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
