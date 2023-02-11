import PageTitle from 'components/PageTitle'
import Dashboard from 'modules/dashboard/Dashboard'
import { Fragment } from 'react'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Dashboard' />
            <Dashboard />
        </Fragment>
    )
}
