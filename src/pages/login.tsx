import { Fragment, ReactElement } from 'react'
import PageTitle from 'components/PageTitle'
import Login from '../modules/auth/Login'

export default function LoginPage() {
    return (
        <Fragment>
            <PageTitle title='Login' />
            <Login />
        </Fragment>
    )
}

LoginPage.getAuthLayout = function PageLayout(page: ReactElement) {
    return {page}
}
