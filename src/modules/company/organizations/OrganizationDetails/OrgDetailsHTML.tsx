import { Organization } from 'gql/generated/hooks'
import { Box, SimpleGrid } from '@mantine/core'
import ContentCard from 'components/ContentCard'
import DetailRow from 'components/DetailRow'
import React from 'react'

interface OrganizationPageProps {
    data: Organization
}

export default function OrganizationPage(props: OrganizationPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Code" value={props.data.code!} />
                    <DetailRow title="Name" value={props.data.name!} />
                    <DetailRow title="Website" value={props.data.website!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Sector" value={props.data?.sector!} />
                    <DetailRow title="Status" value={props.data?.status!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
