import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import RoleEdit from 'modules/company/roles/RoleEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <NextHead title='Edit Role' />
            <RoleEdit code={query.code} />
        </Fragment>
    )
}
