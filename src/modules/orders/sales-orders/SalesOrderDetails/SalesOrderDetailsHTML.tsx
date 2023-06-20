import { SalesOrder } from "gql/generated/hooks"
import { Box, Grid, SimpleGrid, Text } from "@mantine/core"
import ContentCard from "components/ContentCard"
import DetailColumn from "components/DetailColumn"
import moment from "moment"
import DetailRow from "components/DetailRow"
import SalesOrderStatusHTML from "./SalesOrderStatusHTML"

type  SalesOrderDetailsHTMLProps = {
    mb?: string | number
    data: SalesOrder
}

export default function SalesOrderDetailsHTML(props: SalesOrderDetailsHTMLProps) {
    return (
        <Grid>
            <Grid.Col span={8}>
                <ContentCard mb={props.mb}>
                    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <Text size="xl" weight={700}>{props.data?.buyer?.name!}</Text>
                            <Text>{props.data?.buyer?.website!}</Text>
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}></Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailRow title="Date" value={moment(props?.data?.createdAt!).format('Do MMMM YYYY')} />
                            <DetailRow title="SO Code" value={props.data?.code!} />
                            <DetailRow title="PO Code" value={props.data?.purchaseOrder?.code!} />
                        </Box>
                    </SimpleGrid>
                </ContentCard>
                <ContentCard mb={props.mb}>
                    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <Text size="xl" weight={700}>VENDOR</Text>
                            <Text>{props.data?.seller?.name!}</Text>
                            <Text>{props.data?.seller?.website!}</Text>
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <Text size="xl" weight={700}>FINANCIER</Text>
                            {props.data?.financier ?
                                <>
                                    <Text>{props.data?.financier?.name!}</Text>
                                    <Text>{props.data?.financier?.website!}</Text>
                                </> :
                                <Text>NA</Text>
                            }
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <Text size="xl" weight={700}>
                                SHIP TO
                            </Text>
                            <Text>{props.data?.details?.requitioner?.name!}</Text>
                            <Text>{props.data?.details?.requitioner?.website!}</Text>
                            {props.data?.details?.warehouse ?
                                <>
                                    <Text>{props.data?.details?.warehouse?.locality!}</Text>
                                    <Text>{props.data?.details?.warehouse?.city!}</Text>
                                    <Text>{props.data?.details?.warehouse?.pincode!}</Text>
                                </> :
                                <>
                                    <Text>{props.data?.details?.city!}</Text>
                                    <Text>{props.data?.details?.country!}</Text>
                                    <Text>{props.data?.details?.pincode!}</Text>
                                </>
                            }
                        </Box>
                    </SimpleGrid>
                </ContentCard>
                <ContentCard mb={props.mb}>
                    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Currency" value={props.data?.details?.currency} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Shipping Method" value={props.data?.details?.shippingMethod} />
                        </Box>
                        <Box sx={(theme) => ({borderRadius: theme.radius.md})}>
                            <DetailColumn title="Incoterm" value={props.data?.details?.incoterm} />
                        </Box>
                    </SimpleGrid>
                </ContentCard>
            </Grid.Col>
            <Grid.Col span={4}>
                <SalesOrderStatusHTML mb="md" data={props.data?.details!} />
            </Grid.Col>
        </Grid>
    )
}
