import { User } from "gql/generated/hooks"
import { Box, SimpleGrid } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import React from "react"

interface UserPageProps {
    data: User
}

export default function UserPage(props: UserPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Name" value={props.data.firstName! + " " + props.data.lastName!} />
                    <DetailColumn title="Email" value={props.data.email!} />
                    <DetailColumn title="Phone" value={props.data.phone!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="User Code" value={props.data?.role?.code!} />
                    <DetailColumn title="User Name" value={props.data?.role?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailColumn title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailColumn title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
