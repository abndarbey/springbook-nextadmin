import { Tabs } from "@mantine/core"

import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { INavTrailProps } from "components/NavTrails"
import {
    useOrganizationQuery,
} from "gql/generated/hooks"
import PageLoader from "components/PageLoader"
import { showNotification } from "@mantine/notifications"
import { PageProps } from "types/types"
import OrgDetailsHTML from "./OrgDetailsHTML"
import DepartmentTable from "tables/company/DepartmentTable"

export default function OrganizationDetails(props: PageProps) {

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Organizations", href: "/nexport/organizations" },
        { title: props.code, href: "#" },
    ]

    // fetch data
    const { data, loading, error } = useOrganizationQuery(
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

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <Tabs variant="pills" radius="xs" defaultValue="details">
                <Tabs.List>
                    <Tabs.Tab value="details">Details</Tabs.Tab>
                    <Tabs.Tab value="departments">Departments</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="xs">
                    <OrgDetailsHTML data={data?.organization!} />
                </Tabs.Panel>

                <Tabs.Panel value="departments" pt="xs">
                    <DepartmentTable orgID={data?.organization.id} />
                </Tabs.Panel>
            </Tabs>
        </Page>
    )
}