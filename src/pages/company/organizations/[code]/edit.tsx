import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import OrganizationEdit from 'modules/company/organizations/OrganizationEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <NextHead title='Edit Organization' />
            <OrganizationEdit code={query.code} />
        </Fragment>
    )
}
