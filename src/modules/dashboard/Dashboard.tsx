import { Container } from "@mantine/core"
import { Fragment } from "react"
import StatsRing from "./StatsRing"
import StatusGrid from "./StatusGrid"
import StatsGroup from "./StatusGroup"

export default function Dashboard() {
    return (
        <Fragment>
            <StatusGrid />
            <Container>
                <StatsGroup />
                <StatsRing />
            </Container>
        </Fragment>
    )
}