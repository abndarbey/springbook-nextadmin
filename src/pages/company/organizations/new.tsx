import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import OrganizationNew from 'modules/company/organizations/OrganizationNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Organization' />
            <OrganizationNew />
        </Fragment>
    )
}
