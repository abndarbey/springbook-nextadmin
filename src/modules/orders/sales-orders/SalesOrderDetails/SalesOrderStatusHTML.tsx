import { Fragment, useEffect, useState } from "react"
import { SalesOrder, SalesOrderDetail } from "gql/generated/hooks"
import { Badge, Box, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"

type SalesOrderStatusHTMLProps = {
    mb?: string | number
    data: SalesOrderDetail
}

export default function SalesOrderStatusHTML(props: SalesOrderStatusHTMLProps) {

    return (
        <ContentCard mb={props.mb}>
            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                <DetailRow
                    title="Document Status"
                    value={
                        <Badge color="blue">
                            {props.data?.documentStatus}
                            </Badge>
                        }
                />
            </Box>
        </ContentCard>
    )
}
