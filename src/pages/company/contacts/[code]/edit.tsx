import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
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
            <PageTitle title={title} />
            <ContactEdit code={query.code} title={title} />
        </Fragment>
    )
}
