import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import ContactDetails from 'modules/company/contacts/ContactDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const title: string = 'Contact Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <ContactDetails code={query.code} title={title} />
        </Fragment>
    )
}
