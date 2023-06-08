import { Role } from 'gql/generated/hooks'
import { Box, SimpleGrid } from '@mantine/core'
import ContentCard from 'components/ContentCard'
import DetailRow from 'components/DetailRow'
import React from 'react'

interface RolePageProps {
    data: Role
}

export default function RolePage(props: RolePageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title='Code' value={props.data?.code!} />
                    <DetailRow title='Name' value={props.data?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title='Department Code' value={props.data?.department?.code!} />
                    <DetailRow title='Department Name' value={props.data?.department?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title='Organization Code' value={props.data?.organization?.code!} />
                    <DetailRow title='Organization Name' value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
