import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import OrganizationNew from 'modules/company/organizations/OrganizationNew'

export default function New() {
    return (
        <Fragment>
            <NextHead title='New Organization' />
            <OrganizationNew />
        </Fragment>
    )
}
