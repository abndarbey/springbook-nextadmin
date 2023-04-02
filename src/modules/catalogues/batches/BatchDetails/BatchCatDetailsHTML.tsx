import { SimpleGrid, Box, Badge } from "@mantine/core"

import ContentCard from "components/ContentCard"
import { BatchCatalogue } from "@lib/generated/hooks"
import DetailRow from "components/DetailRow"

interface IBatchCatPageProps {
    data: BatchCatalogue
}

export default function BatchCatDetailsHTML(props: IBatchCatPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Code" value={props.data.code!} />
                    <DetailRow title="Number" value={props.data.batchNumber!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Sku Code" value={props.data?.sku?.code!} />
                    <DetailRow title="Sku Name" value={props.data?.sku?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailRow title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Status" value={<Badge>{props.data?.status!}</Badge>} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}