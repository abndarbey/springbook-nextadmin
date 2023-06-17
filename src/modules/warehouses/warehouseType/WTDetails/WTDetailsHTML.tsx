import { WarehouseType } from "gql/generated/hooks"
import { Box, SimpleGrid } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import React from "react"

interface IWTDetailsHTMLProps {
    data: WarehouseType
}

export default function WTDetailsHTML(props: IWTDetailsHTMLProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Code" value={props.data.code!} />
                    <DetailColumn title="Name" value={props.data.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailColumn title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
