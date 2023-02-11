import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import NavTrails, { INavTrailProps } from 'components/NavTrails'

interface IPageProps {
    navTrails: INavTrailProps[]
    children: ReactNode
}

const Page = (props: IPageProps) => {
    return (
        <Box>
            <NavTrails navTrails={props.navTrails} />
            {props.children}
        </Box>
    )
}

export default Page