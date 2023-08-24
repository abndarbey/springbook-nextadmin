import { Fragment } from "react"
import { PurchaseOrder, PurchaseOrderDetail } from "gql/generated/hooks"
import { Box, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import moment from "moment"
import DetailRow from "components/DetailRow"

type PurchaseOrderTermsHTMLProps = {
    mb?: string | number
    data: PurchaseOrderDetail
}

export default function PurchaseOrderTermsHTML(props: PurchaseOrderTermsHTMLProps) {
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
