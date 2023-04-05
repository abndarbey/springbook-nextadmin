import React from "react"
import {QRCodeSVG} from "qrcode.react"
import { Box } from "@mantine/core"

interface IQrGenProps {
    uid: string
}

export default function QrGen(props: IQrGenProps) {
    return (
        <Box>
            <QRCodeSVG value={props.uid} height="300" width="300" />
        </Box>
    )
}
