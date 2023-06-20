import { Fragment } from "react"
import { SalesOrder, SalesOrderDetail } from "gql/generated/hooks"
import { Box, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import moment from "moment"
import DetailRow from "components/DetailRow"

type SalesOrderTermsHTMLProps = {
    mb?: string | number
    data: SalesOrderDetail
}

export default function SalesOrderTermsHTML(props: SalesOrderTermsHTMLProps) {
    const shippingTerms = props.data?.shippingTerms?.map((value: string, index: number) => {
        return (
            <li key={index}>
                <Text>{value}</Text>
            </li>
        )
    })

    const contractTerms = props.data?.contractTerms?.map((value: string, index: number) => {
        return (
            <li key={index}>
                <Text>{value}</Text>
            </li>
        )
    })

    return (
        <Fragment>
            <ContentCard mb={props.mb}>
                <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <Text size="xl" weight={700}>SHIPPING TERMS</Text>
                    <ul>{shippingTerms}</ul>
                </Box>
            </ContentCard>
            <ContentCard mb={props.mb}>
            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                    <Text size="xl" weight={700}>CONTRACT TERMS</Text>
                    <ul>{contractTerms}</ul>
                </Box>
            </ContentCard>
        </Fragment>
    )
}
