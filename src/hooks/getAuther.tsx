import { Dispatch, SetStateAction, useState } from "react"
import { Auther, useAutherQuery } from "@lib/generated/hooks"
import { showNotification } from "@mantine/notifications"
import PageLoader from "components/PageLoader"

export function useGetAuther(): Auther | JSX.Element {
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [auther, setAuther] = useState<Auther>()

    const authData = useAutherQuery()
    if (authData.loading) {
        return (
            <PageLoader />
        )
    }
    if (authData.error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: authData.error.message,
        })
        return <PageLoader isError={true} />
    }
    if (authData.data && !autherLoaded) {
        setAutherLoaded(true)
        setAuther(authData.data.auther)
    }

    return auther!
}