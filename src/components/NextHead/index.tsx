import Head from 'next/head'

interface NextHeadProps {
    title: string
}

export default function NextHead (props: NextHeadProps) {
    const pageTitle: string = `${props.title} | Springbook`
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
