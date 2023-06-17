import { Role } from 'gql/generated/hooks'
import { Box, SimpleGrid } from '@mantine/core'
import ContentCard from 'components/ContentCard'
import DetailColumn from 'components/DetailColumn'
import React from 'react'

interface RolePageProps {
    data: Role
}

export default function RolePage(props: RolePageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title='Code' value={props.data?.code!} />
                    <DetailColumn title='Name' value={props.data?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title='Department Code' value={props.data?.department?.code!} />
                    <DetailColumn title='Department Name' value={props.data?.department?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title='Organization Code' value={props.data?.organization?.code!} />
                    <DetailColumn title='Organization Name' value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
