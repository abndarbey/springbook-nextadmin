import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import OrganizationList from 'modules/company/organizations/OrganizationList'

export default function Organizations() {
    return (
        <Fragment>
            <NextHead title='Organizations' />
            <OrganizationList />
        </Fragment>
    )
}
