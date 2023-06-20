import { SalesOrderDetail } from "gql/generated/hooks"
import { Box } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"

type SalesOrderAdditionalDetailsHTMLProps = {
    mb?: string | number
    data: SalesOrderDetail
}

export default function SalesOrderAdditionalDetailsHTML(props: SalesOrderAdditionalDetailsHTMLProps) {
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
