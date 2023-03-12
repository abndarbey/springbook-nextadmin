import { useRouter } from "next/router"
import Topbar from "components/Topbar"
import Sidebar from "components/Sidebar"
import { layoutStyles } from "./styles"
import GenericHeader from "components/GenericHeader"
import { ReactNode, useEffect } from "react"

interface ILayoutProps {
    children: ReactNode
}

export function AdminLayout(props: ILayoutProps) {
    const { classes } = layoutStyles()
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/login")
        }
    }, [router])

    return (
        <div className={classes.container}>
            <aside className={classes.sidebar}>
                <Sidebar width={250} />
            </aside>
            <nav className={classes.topbar}>
                <Topbar height={60} />
            </nav>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}

export function AuthLayout(props: ILayoutProps) {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            router.push("/dashboard")
        }
    }, [router])

    return (
        <div>
            <GenericHeader />
            {props.children}
        </div>
    )
}

export function ErrorLayout(props: ILayoutProps) {

    return (
        <div>
            <GenericHeader />
            {props.children}
        </div>
    )
}
