import NextHead from 'components/NextHead'
import Dashboard from 'modules/dashboard/Dashboard'
import { Fragment } from 'react'

export default function Home() {
    return (
        <Fragment>
            <NextHead title='Dashboard' />
            <Dashboard />
        </Fragment>
    )
}
