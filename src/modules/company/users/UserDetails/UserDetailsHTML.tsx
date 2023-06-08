import { User } from "gql/generated/hooks"
import { Box, SimpleGrid } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"
import React from "react"

interface UserPageProps {
    data: User
}

export default function UserPage(props: UserPageProps) {
    return (
        <ContentCard>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Name" value={props.data.firstName! + " " + props.data.lastName!} />
                    <DetailRow title="Email" value={props.data.email!} />
                    <DetailRow title="Phone" value={props.data.phone!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="User Code" value={props.data?.role?.code!} />
                    <DetailRow title="User Name" value={props.data?.role?.name!} />
                </Box>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <DetailRow title="Organization Code" value={props.data?.organization?.code!} />
                    <DetailRow title="Organization Name" value={props.data?.organization?.name!} />
                </Box>
            </SimpleGrid>
        </ContentCard>
    )
}
