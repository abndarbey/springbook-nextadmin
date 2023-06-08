import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import OrganizationDetails from 'modules/nexport/organizations/OrganizationDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <NextHead title='Details Organization' />
            <OrganizationDetails code={query.code} />
        </Fragment>
    )
}
