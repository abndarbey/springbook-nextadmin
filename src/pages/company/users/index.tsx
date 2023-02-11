import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import UserList from 'modules/company/users/UserList'

export default function Users() {
    return (
        <Fragment>
            <PageTitle title='Users' />
            <UserList />
        </Fragment>
    )
}
