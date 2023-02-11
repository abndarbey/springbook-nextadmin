import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import UserNew from 'modules/company/users/UserNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New User' />
            <UserNew />
        </Fragment>
    )
}
