import { Department } from '@lib/generated/hooks'
import { Box, SimpleGrid } from '@mantine/core'
import ContentCard from 'components/ContentCard'
import DetailRow from 'components/DetailRow'
import React from 'react'

interface DepartmentPageProps {
    data: Department
}

export default function DepartmentPage(props: DepartmentPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Code" value={props.data.code!} />
                    <DetailRow title="Name" value={props.data.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailRow title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}