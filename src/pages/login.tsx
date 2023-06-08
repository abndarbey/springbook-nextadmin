import { Fragment, ReactElement } from 'react'
import NextHead from 'components/NextHead'
import Login from '../modules/auth/Login'

export default function LoginPage() {
    return (
        <Fragment>
            <NextHead title='Login' />
            <Login />
        </Fragment>
    )
}

LoginPage.getAuthLayout = function PageLayout(page: ReactElement) {
    return {page}
}
