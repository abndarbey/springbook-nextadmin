import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import ContactEdit from 'modules/company/contacts/ContactEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const title: string = 'Contact Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <ContactEdit code={query.code} title={title} />
        </Fragment>
    )
}
