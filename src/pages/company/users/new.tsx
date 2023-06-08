import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import UserNew from 'modules/company/users/UserNew'

export default function New() {
    return (
        <Fragment>
            <NextHead title='New User' />
            <UserNew />
        </Fragment>
    )
}
