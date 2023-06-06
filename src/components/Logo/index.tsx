import Image from 'next/image'
import { useMantineColorScheme } from '@mantine/core'

// const logoSvg = require('../../assets/logos/slackbear_dark_logo.svg')
const lightLogo = require('../../assets/logos/springbook_logo.png')
const darkLogo = require('../../assets/logos/springbook_logo_dark.png')

export default function Logo() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    return (
        <Image
            width={'130'}
            src={colorScheme === 'dark' ? darkLogo : lightLogo}
            alt="Random unsplash image"
        />
    )
}