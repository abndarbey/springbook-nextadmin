import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useUserQuery,
    useUserArchiveMutation,
    useUserUnarchiveMutation,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import UserDetailsHTML from "./UserDetailsHTML"

export default function UserDetails(props: PageProps) {
    const router = useRouter()
    const [archiveRequest] = useUserArchiveMutation({})
    const [unarchiveRequest] = useUserUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Users", href: "/company/users" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useUserQuery(
        {
            variables: {
                email: props.code,
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
        router.push(`/company/users/${props.code}/edit`)
    }
    
    // archive action
    const handleArchive = (e: any) => {
        e.preventDefault()
        archiveRequest({
            variables: {id: data?.user.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.userArchive.firstName}`,
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
            variables: {id: data?.user.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.userUnarchive.firstName}`,
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
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.user.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.user.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <UserDetailsHTML data={data?.user!} />
        </Page>
    )
}