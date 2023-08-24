import { Organization } from 'gql/generated/hooks'
import { Box, SimpleGrid } from '@mantine/core'
import ContentCard from 'components/ContentCard'
import DetailColumn from 'components/DetailColumn'
import React from 'react'

interface OrganizationPageProps {
    data: Organization
}

export default function OrganizationPage(props: OrganizationPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="ID" value={props.data.id!} />
                    <DetailColumn title="Code" value={props.data.code!} />
                    <DetailColumn title="Name" value={props.data.name!} />
                    <DetailColumn title="Website" value={props.data.website!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Sector" value={props.data?.sector!} />
                    <DetailColumn title="Status" value={props.data?.status!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
