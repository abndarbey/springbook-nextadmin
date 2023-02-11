import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
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
            <PageTitle title={title} />
            <ContactDetails code={query.code} title={title} />
        </Fragment>
    )
}
