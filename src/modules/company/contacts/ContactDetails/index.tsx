import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useContactQuery,
    useContactFinalizeMutation,
    useContactArchiveMutation,
    useContactUnarchiveMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import ContactDetailsHTML from "./ContactDetailsHTML"

export default function ContactDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useContactFinalizeMutation({})
    const [archiveRequest] = useContactArchiveMutation({})
    const [unarchiveRequest] = useContactUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Contacts", href: "/company/contacts" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useContactQuery(
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
        router.push(`/company/contacts/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.contact.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Finalized - ${res.data.contactFinalize.name}`,
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
            variables: {id: data?.contact.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.contactArchive.name}`,
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
            variables: {id: data?.contact.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.contactUnarchive.name}`,
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
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.contact.isFinal!},
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.contact.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.contact.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <ContactDetailsHTML data={data?.contact!} />
        </Page>
    )
}