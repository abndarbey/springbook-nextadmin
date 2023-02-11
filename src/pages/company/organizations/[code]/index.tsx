import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import OrganizationDetails from 'modules/company/organizations/OrganizationDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='Details Organization' />
            <OrganizationDetails code={query.code} />
        </Fragment>
    )
}
