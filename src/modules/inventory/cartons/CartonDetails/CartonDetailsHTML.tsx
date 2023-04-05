import { Fragment } from "react"
import { Carton } from "@lib/generated/hooks"
import { Box, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"

interface ICartonDetailsHTMLProps {
    data: Carton
}

export default function CartonDetailsHTML(props: ICartonDetailsHTMLProps) {
    return (
        <Fragment>
            <ContentCard mb="xs">
                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                    <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                        <DetailRow title="Code" value={props.data.code!} />
                        {/* <DetailRow title="Name" value={props.data.name!} /> */}
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
            
            <ContentCard>
                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                    <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <Text size="xl" weight={700} underline>Location</Text>
                        <DetailRow title="Latitude" value={props.data.latestTrackerLog?.location?.lat!} />
                        <DetailRow title="Longitude" value={props.data.latestTrackerLog?.location?.lon!} />
                        {/* <DetailRow title="Name" value={props.data.name!} /> */}
                    </Box>
                    <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <Text size="xl" weight={700} underline>SKU</Text>
                        <DetailRow title="SKU Code" value={props.data?.sku?.code!} />
                        <DetailRow title="SKU Name" value={props.data?.sku?.name!} />
                    </Box>
                    <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <Text size="xl" weight={700} underline>Batch</Text>
                        <DetailRow title="Batch Code" value={props.data?.batch?.code!} />
                        <DetailRow title="Batch Number" value={props.data?.batch?.batchNumber!} />
                    </Box>
                </SimpleGrid>
            </ContentCard>
        </Fragment>
    )
}
