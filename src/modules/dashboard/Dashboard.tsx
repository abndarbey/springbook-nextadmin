import { Container } from "@mantine/core"
import { Fragment } from "react"
import StatsRing from "./StatsRing"
import StatusGrid from "./StatusGrid"
import StatsGroup from "./StatusGroup"
import StatusProgressBarCard from "./StatusProgressBarCard"

export default function Dashboard() {
    return (
        <Fragment>
            <StatusGrid />
            <StatsGroup />
            <StatsRing />
            {/* <StatusProgressBarCard /> */}
        </Fragment>
    )
}