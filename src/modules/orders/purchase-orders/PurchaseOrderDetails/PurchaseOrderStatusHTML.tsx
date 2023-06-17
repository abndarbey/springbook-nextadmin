import { Fragment, useEffect, useState } from "react"
import { PurchaseOrder, PurchaseOrderDetail } from "gql/generated/hooks"
import { Badge, Box, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailRow from "components/DetailRow"

type PurchaseOrderStatusHTMLProps = {
    mb?: string | number
    data: PurchaseOrderDetail
}

export default function PurchaseOrderStatusHTML(props: PurchaseOrderStatusHTMLProps) {
    const [sellerAcceptedStatusColor, setSellerAcceptedStatusColor] = useState<string>("gray")
    const [financierApprovedStatusColor, setFinancierApprovedStatusColor] = useState<string>("gray")

    // get org uid from local storage
    useEffect(() => {
        if (props.data.sellerAcceptedStatus === "ACCEPTED") {
            setSellerAcceptedStatusColor("green")
        }
        if (props.data.sellerAcceptedStatus === "DECLINED") {
            setSellerAcceptedStatusColor("red")
        }
    
        if (props.data.financierApprovedStatus === "APPROVED") {
            setFinancierApprovedStatusColor("green")
        }
        if (props.data.financierApprovedStatus === "DECLINED") {
            setFinancierApprovedStatusColor("red")
        }
    }, [props.data.sellerAcceptedStatus, props.data.financierApprovedStatus])

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
                <DetailRow
                    title="Seller Accepted"
                    value={
                        <Badge color={sellerAcceptedStatusColor}>
                            {props.data?.sellerAcceptedStatus}
                        </Badge>
                    }
                />
                <DetailRow
                    title="Financier Approved"
                    value={
                        <Badge color={financierApprovedStatusColor}>
                            {props.data?.financierApprovedStatus}
                        </Badge>
                    }
                />
            </Box>
        </ContentCard>
    )
}
