import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import Dashboard from '../modules/dashboard/Dashboard'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Dashboard' />
            <Dashboard />
        </Fragment>
    )
}
