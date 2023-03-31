import { Batch} from '@lib/generated/hooks'
import { Box, SimpleGrid, Badge} from '@mantine/core'
import ContentCard from 'components/ContentCard'
import DetailRow from 'components/DetailRow'
import React from 'react'

interface BatchCataloguePageProps {
    data: Batch
}

export default function BatchCataloguePage(props:BatchCataloguePageProps){

return (

    <ContentCard>
    <SimpleGrid cols={4} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
            <DetailRow title='Code' value={props.data?.code!} />
            <DetailRow title='UID' value={props.data?.uid!} />
            <DetailRow title='Batch Number' value={props.data?.batchNumber!} />
        </Box>
        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
            <DetailRow title='SKU Code' value={props.data?.sku?.code!} />
            <DetailRow title='SKU Name' value={props.data?.sku?.name!} />
        </Box>
        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
            <DetailRow title='Organization Code' value={props.data?.organization?.code!} />
            <DetailRow title='Organization Name' value={props.data?.organization?.name!} />
        </Box>
        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
            <DetailRow title='Status' value={<Badge>{props.data?.status!}</Badge>} />
        </Box>
    </SimpleGrid>
    </ContentCard>
    )
}