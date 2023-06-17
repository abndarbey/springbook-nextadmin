import { SimpleGrid, Box, Badge } from "@mantine/core"

import ContentCard from "components/ContentCard"
import { SkuCatalogue } from "gql/generated/hooks"
import DetailColumn from "components/DetailColumn"

interface ISkuCatPageProps {
    data: SkuCatalogue
}

export default function SkuCatDetailsHTML(props: ISkuCatPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Code" value={props.data.code!} />
                    <DetailColumn title="Name" value={props.data.name!} />
                    <DetailColumn title="Brand" value={props.data.brand!} />
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