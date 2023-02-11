import { Fragment, ReactElement } from 'react'
import PageTitle from 'components/PageTitle'
import Register from '../modules/auth/Register'

export default function RegisterPage() {
    return (
        <Fragment>
            <PageTitle title='Register' />
            <Register />
        </Fragment>
    )
}

RegisterPage.getAuthLayout = function PageLayout(page: ReactElement) {
    return {page}
}
