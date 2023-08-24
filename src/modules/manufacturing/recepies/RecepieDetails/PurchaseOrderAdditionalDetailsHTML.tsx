import { Fragment } from "react"
import { PurchaseOrder, PurchaseOrderDetail } from "gql/generated/hooks"
import { Box, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import moment from "moment"
import DetailRow from "components/DetailRow"

type PurchaseOrderAdditionalDetailsHTMLProps = {
    mb?: string | number
    data: PurchaseOrderDetail
}

export default function PurchaseOrderAdditionalDetailsHTML(props: PurchaseOrderAdditionalDetailsHTMLProps) {
    return (
        <ContentCard mb={props.mb}>
            <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                <DetailRow title="Notes" value={props.data?.notes} />
                <DetailRow title="Buyer Message" value={props.data?.buyerMessage} />
                <DetailRow title="Seller Message" value={props.data?.sellerMessage} />
            </Box>
        </ContentCard>
    )
}
