import { Fragment, ReactElement } from 'react'
import NextHead from 'components/NextHead'
import Register from '../modules/auth/Register'

export default function RegisterPage() {
    return (
        <Fragment>
            <NextHead title='Register' />
            <Register />
        </Fragment>
    )
}

RegisterPage.getAuthLayout = function PageLayout(page: ReactElement) {
    return {page}
}
