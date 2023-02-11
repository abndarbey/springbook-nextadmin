import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import OrganizationList from 'modules/nexport/organizations/OrganizationList'

export default function Organizations() {
    return (
        <Fragment>
            <PageTitle title='Nexport Organizations' />
            <OrganizationList />
        </Fragment>
    )
}
