import Image from 'next/image'
import { useMantineColorScheme } from '@mantine/core'

// const logoSvg = require('../../assets/logos/slackbear_dark_logo.svg')
const lightLogo = require('../../assets/logos/slackbear_logo.png')
const darkLogo = require('../../assets/logos/slackbear_logo_dark.png')

export default function Logo() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    return (
        <Image
            width={'100'}
            src={colorScheme === 'dark' ? darkLogo : lightLogo}
            alt="Random unsplash image"
        />
    )
}