import React from 'react'
import { Loader } from '@mantine/core'
import { usePageLoaderStyles } from './styles'

interface IPageLoaderProps {
    isError?: boolean
}
export default function PageLoader(props: IPageLoaderProps) {
    const { classes } = usePageLoaderStyles()
    return (
        <div className={classes.container}>
            {props.isError && <h1>Unable to load data.</h1>}
            <Loader variant="dots" />
        </div>
    )
}
