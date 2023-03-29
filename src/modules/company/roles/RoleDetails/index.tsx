import { useRouter } from "next/router"
import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import { IActionButtonProps } from "components/PageHeader/ActionButtons"
import {
    useRoleQuery,
    useRoleFinalizeMutation,
    useRoleArchiveMutation,
    useRoleUnarchiveMutation,
} from "@lib/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import RolePage from "./RolePage"
import Roles from "tables/Roles"
import Users from "tables/Users"

export default function RoleDetails(props: PageProps) {
    const router = useRouter()
    const [finalizeRequest] = useRoleFinalizeMutation({})
    const [archiveRequest] = useRoleArchiveMutation({})
    const [unarchiveRequest] = useRoleUnarchiveMutation({})

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Roles", href: "/company/roles" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useRoleQuery(
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
        router.push(`/company/roles/${props.code}/edit`)
    }
    
    // finalize action
    const handleFinalize = (e: any) => {
        e.preventDefault()
        finalizeRequest({
            variables: {id: data?.role.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Finalized - ${res.data.roleFinalize.name}`,
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
            variables: {id: data?.role.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Archived - ${res.data.roleArchive.name}`,
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
            variables: {id: data?.role.id!}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Unarchived - ${res.data.roleUnarchive.name}`,
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
        { type: "finalize", name: "Finalize", action: handleFinalize, disabled: data?.role.isFinal!},
        { type: "archive", name: "Archive", action: handleArchive, disabled: data?.role.isArchived! },
        { type: "unarchive", name: "Unarchive", action: handleUnarchive, disabled: !data?.role.isArchived! },
    ]

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} buttons={actionButtons} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="users">Users</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <RolePage data={data?.role!} />
                </Tabs.Panel>

                <Tabs.Panel value="users" pt="xs">
                    <Users roleID={data?.role.id} />
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}