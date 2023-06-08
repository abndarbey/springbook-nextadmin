import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import UserList from 'modules/company/users/UserList'

export default function Users() {
    return (
        <Fragment>
            <NextHead title='Users' />
            <UserList />
        </Fragment>
    )
}
