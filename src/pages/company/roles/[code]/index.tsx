import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import RoleDetails from 'modules/company/roles/RoleDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <NextHead title='Role Details' />
            <RoleDetails code={query.code} />
        </Fragment>
    )
}
