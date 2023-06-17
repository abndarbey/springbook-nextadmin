import { Cell } from "gql/generated/hooks"
import { Box, SimpleGrid } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import React from "react"

interface ICellDetailsHTMLProps {
    data: Cell
}

export default function CellDetailsHTML(props: ICellDetailsHTMLProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Cell Code" value={props.data.code!} />
                    <DetailColumn title="Rack Code" value={props.data.rack?.code!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Warehouse Code" value={props.data?.warehouse?.code!} />
                    <DetailColumn title="Warehouse Name" value={props.data?.warehouse?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailColumn title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
