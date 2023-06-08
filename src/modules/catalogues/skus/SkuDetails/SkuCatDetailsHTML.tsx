import { SimpleGrid, Box, Badge } from "@mantine/core"

import ContentCard from "components/ContentCard"
import { SkuCatalogue } from "gql/generated/hooks"
import DetailRow from "components/DetailRow"

interface ISkuCatPageProps {
    data: SkuCatalogue
}

export default function SkuCatDetailsHTML(props: ISkuCatPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Code" value={props.data.code!} />
                    <DetailRow title="Name" value={props.data.name!} />
                    <DetailRow title="Brand" value={props.data.brand!} />
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