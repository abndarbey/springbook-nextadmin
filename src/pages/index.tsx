import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import Dashboard from '../modules/dashboard/Dashboard'

export default function Home() {
    return (
        <Fragment>
            <NextHead title='Dashboard' />
            <Dashboard />
        </Fragment>
    )
}
