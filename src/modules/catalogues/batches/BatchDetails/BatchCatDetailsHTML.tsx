import { SimpleGrid, Box, Badge } from "@mantine/core"

import ContentCard from "components/ContentCard"
import { BatchCatalogue } from "gql/generated/hooks"
import DetailColumn from "components/DetailColumn"

interface IBatchCatPageProps {
    data: BatchCatalogue
}

export default function BatchCatDetailsHTML(props: IBatchCatPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Code" value={props.data.code!} />
                    <DetailColumn title="Number" value={props.data.batchNumber!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Sku Code" value={props.data?.sku?.code!} />
                    <DetailColumn title="Sku Name" value={props.data?.sku?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailColumn title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Status" value={<Badge>{props.data?.status!}</Badge>} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}