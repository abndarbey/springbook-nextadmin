import { PurchaseOrder } from "@lib/generated/hooks"
import { Box, SimpleGrid } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"
import React from "react"

interface IPurchaseOrderDetailsHTMLProps {
    data: PurchaseOrder
}

export default function PurchaseOrderDetailsHTML(props: IPurchaseOrderDetailsHTMLProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Code" value={props.data.code!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Buyer Code" value={props.data?.buyer?.code!} />
                    <DetailRow title="Buyer Name" value={props.data?.buyer?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Seller Code" value={props.data?.seller?.code!} />
                    <DetailRow title="Seller Name" value={props.data?.seller?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
