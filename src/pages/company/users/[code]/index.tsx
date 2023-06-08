import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import UserDetails from 'modules/company/users/UserDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <NextHead title='User Details' />
            <UserDetails code={query.code} />
        </Fragment>
    )
}
