import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useSkuCatalogueQuery,
    useSkuCatalogueFinalizeMutation,
    useSkuCatalogueArchiveMutation,
    useSkuCatalogueUnarchiveMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import BatchCatTable from "tables/catalogues/BatchCatTable"
import SkuCatDetailsHTML from "./SkuCatDetailsHTML"

export default function SkuCatalogueDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useSkuCatalogueFinalizeMutation({})
    const [archiveRequest] = useSkuCatalogueArchiveMutation({})
    const [unarchiveRequest] = useSkuCatalogueUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Sku Catalogues", href: "/catalogues/skus" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useSkuCatalogueQuery(
        {
            variables: {
                code: props.code,
            }
        }
    )
    if (loading) {
        return (
            <PageLoader />
        )
    }
    if (!loading && error) {
        showNotification({
            disallowClose: false,
            color: "red",
            message: error.message,
        })
        return <PageLoader isError={true} />
    }

    // edit action
    const handleEdit = (e: any) => {
        e.preventDefault()
        router.push(`/catalogues/skus/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {uid: data?.skuCatalogue.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Finalized - ${res.data.skuCatalogueFinalize.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }
    
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {uid: data?.skuCatalogue.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.skuCatalogueArchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }
    
    // unarchive action
    const handleUnarchive = (e: any) => {
        e.preventDefault()
        unarchiveRequest({
            variables: {uid: data?.skuCatalogue.uid!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.skuCatalogueUnarchive.name}`,
            })
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    // define action buttons
    const actionButtons: IActionButtonProps[] = [
        { type: "edit", name: "Edit", action: handleEdit },
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.skuCatalogue.isFinal!},
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.skuCatalogue.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.skuCatalogue.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="batches">Batches</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <SkuCatDetailsHTML data={data?.skuCatalogue!} />
                </Tabs.Panel>

                <Tabs.Panel value="batches" pt="xs">
                    <BatchCatTable skuUID={data?.skuCatalogue.uid} />
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}