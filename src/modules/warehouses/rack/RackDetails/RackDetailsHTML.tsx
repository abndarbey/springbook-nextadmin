import { Rack } from "gql/generated/hooks"
import { Box, SimpleGrid } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"
import React from "react"

interface IRackDetailsHTMLProps {
    data: Rack
}

export default function RackDetailsHTML(props: IRackDetailsHTMLProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Code" value={props.data.code!} />
                    <DetailRow title='Rows x Columns' value={props.data.rows! + ' x ' + props.data.columns!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Warehouse Code" value={props.data?.warehouse?.code!} />
                    <DetailRow title="Warehouse Name" value={props.data?.warehouse?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailRow title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
