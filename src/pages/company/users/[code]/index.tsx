import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import UserDetails from 'modules/company/users/UserDetails'
import PageLoader from 'components/PageLoader'

export default function Details() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }
    
    return (
        <Fragment>
            <PageTitle title='User Details' />
            <UserDetails code={query.code} />
        </Fragment>
    )
}
