import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import OrganizationList from 'modules/nexport/organizations/OrganizationList'

export default function Organizations() {
    return (
        <Fragment>
            <NextHead title='Nexport Organizations' />
            <OrganizationList />
        </Fragment>
    )
}
